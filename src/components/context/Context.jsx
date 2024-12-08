import { createContext, useEffect, useState } from 'react';
import { runGemini } from '../../components/config/gemini';

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

    /**
     * Resets the chat state and starts new Conversation state.
     */
    const newChat = () => {
        setLoading(false)
        setshowResults(false)
    }

    /**
     * Handling sending of a prompt to backend and processing the response
     * @param {string} prompt - The input prompt to be passed.
     */
    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setshowResults(true);
        let response;
        if (prompt !== undefined) {
            response = await runGemini(prompt);
            setRecentPrompt(prompt);
        }
        else {
            setPrevPrompt(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await runGemini(input);
        }
        let responseArray = response.split('**');
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + '</b>';
            }
        }
        let newResponse2 = newResponse.split("*").join("<br>");
        let newResponseArray = newResponse2.split(" ");

        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
        setLoading(false);
        setInput('');

    }

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
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;