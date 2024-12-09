import { createContext, useEffect, useState } from 'react';
import { runGemini } from '../../components/config/gemini';
import { useNavigate, useParams } from "react-router-dom";

// Creating a context for global state management
export const Context = createContext();

const ContextProvider = ({ children }) => {

    // variable which is needed to manage applications behaviour and data
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResults, setshowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    // const [chatId, setChatId] = useState(null);
    const navigate = useNavigate();
    const { chatId } = useParams();

    /**
     * Creating a typeWriter affect by adding delay.
     * @param {number} index - index of the word.
     * @param {string} nextWord - the next word to be added.
     */
    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 75 * index)
    }


    const startNewChat = async () => {
        const sessionToken = sessionStorage.getItem("sessionToken");

        if (!sessionToken) {
            alert("Session token not found. Please log in.");
            navigate("/login");
            return;
        }

        try {
            const response = await fetch("/api/newChat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${sessionToken}`,
                },
            });

            const data = await response.json();
            if (response.ok) {
                sessionStorage.setItem("chatID", data.chatID);
                alert(`New chat started! Chat ID: ${data.chatID}`);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error starting new chat:", error);
        }
    };


    /**
     * Resets the chat state and starts new Conversation state.
     */
    const newChat = async () => {
        // await startNewChat();
        setLoading(false)
        setshowResults(false);
        setInput('');
        setResultData('');
    }

    /**
     * Handling sending of a prompt to backend and processing the response
     * @param {string} prompt - The input prompt to be passed.
     */
    // const onSent = async (prompt) => {
    //     setResultData("");
    //     setLoading(true);
    //     setshowResults(true);
    //     let response;
    //     if (prompt !== undefined) {
    //         response = await runGemini(prompt);
    //         setRecentPrompt(prompt);
    //     }
    //     else {
    //         setPrevPrompt(prev => [...prev, input]);
    //         setRecentPrompt(input);
    //         response = await runGemini(input);
    //     }
    //     let responseArray = response.split('**');
    //     let newResponse = "";
    //     for (let i = 0; i < responseArray.length; i++) {
    //         if (i === 0 || i % 2 !== 1) {
    //             newResponse += responseArray[i];
    //         }
    //         else {
    //             newResponse += "<b>" + responseArray[i] + '</b>';
    //         }
    //     }
    //     let newResponse2 = newResponse.split("*").join("<br>");
    //     let newResponseArray = newResponse2.split(" ");

    //     for (let i = 0; i < newResponseArray.length; i++) {
    //         const nextWord = newResponseArray[i];
    //         delayPara(i, nextWord + " ");
    //     }
    //     setLoading(false);
    //     setInput('');

    // }

    /**
     * Handles sending a message (or prompt) to the backend and processing the response
     * @param {string} prompt - The input prompt to be passed
     */
    const onSent = async (prompt) => {

        console.log("prompt = ",prompt)
        console.log("chatId = ",chatId)
        setResultData('');
        setLoading(true);
        setshowResults(true);

        const payload = {
            // chatId,
            user_query: prompt,
        };

        if (!chatId) {
            try {
                console.log("body = ",JSON.stringify(payload))
                const response = await fetch('api/legalchat/get_response', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${sessionStorage.getItem('sessionToken')}`,
                    },
                    body: JSON.stringify(payload),
                });
    
                const data = await response.json();
                console.log("response = ",data)
                if (response.ok) {
                    setRecentPrompt(payload.user_query);
                    processResponse(data.user_query_response);
                    navigate(`/legalchat/${data.chat_session_id}`);
                    // return data.chat_session_id
                    // navigate(`/legalchat/${data.chat_session_id}`);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error sending message:', error);
            } finally {
                setLoading(false);
                setInput('');
            }
            // alert('Chat ID not found. Please start a new chat.');
            // return;
        }
        else
        {
            try {
                console.log("body = ",JSON.stringify(payload))
                const response = await fetch(`api/legalchat/${chatId}/get_response`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${sessionStorage.getItem('sessionToken')}`,
                    },
                    body: JSON.stringify(payload),
                });
                
                const data = await response.json();
                if (response.ok) {
                    setRecentPrompt(payload.user_query);
                    processResponse(data.response);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error sending message:', error);
            } finally {
                setLoading(false);
                setInput('');
            }

        }
    };

    /**
     * Processes the backend response to simulate a typewriter effect
     * @param {string} response - The backend response to be processed
     */
    const processResponse = (response) => {
        const responseArray = response.split('**');
        let formattedResponse = '';
        for (let i = 0; i < responseArray.length; i++) {
            formattedResponse += i % 2 === 1 ? `<b>${responseArray[i]}</b>` : responseArray[i];
        }
        const finalResponse = formattedResponse.split('*').join('<br>').split(' ');

        finalResponse.forEach((word, index) => {
            setTimeout(() => {
                setResultData((prev) => prev + word + ' ');
            }, 75 * index);
        });
    };


    // Context value which contains functions and state values which is shared across components
    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        // startNewChat,
        chatId,
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;