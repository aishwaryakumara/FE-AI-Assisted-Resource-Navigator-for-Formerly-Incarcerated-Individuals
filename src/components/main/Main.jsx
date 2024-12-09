import React, { useContext } from 'react';
import './main.css'; // Importing styles required
import { assets } from '../../assets/assets'; // Importing assets
import { Context } from '../../components/context/Context';

const Main = () => {

    // Destructuring variables and functions from the Context
    // const { chatId, onSent, recentPrompt, showResults, loading, resultData, setInput, input, newChat, } = useContext(Context);

    const {
        chatId,
        setChatId,
        startNewChat,
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    // const [chatHistory, setChatHistory] = useState([]);   

    const fetchChatHistory = async () => {
        const sessionToken = sessionStorage.getItem('sessionToken');
        const chatID = sessionStorage.getItem('chatID') || chatId;

        if (!sessionToken || !chatID) {
            console.error('Session token or chat ID is missing.');
            return;
        }

        try {
            const response = await fetch(`/api/getChatHistory?chatID=${storedChatId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
            });

            const data = await response.json();
            if (response.ok) {
                // setChatHistory(data.messages); // Populate chat history
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error fetching chat history:', error);
        }
    };

     /**
     * Initialize chatId when the component is first mounted
     */
    //  useEffect(() => {
    //     const initializeChat = async () => {
    //         const storedChatId = sessionStorage.getItem('chatID');

    //         if (storedChatId) {
    //             // Use the existing chat ID if it exists
    //             setChatId(storedChatId);
    //             fetchChatHistory();
    //         } else {
    //             // Start a new chat if no chat ID exists
    //             const newChatId = await startNewChat();
    //             setChatId(newChatId);
    //             sessionStorage.setItem('chatID', newChatId);
    //         }
    //     };

    //     initializeChat();
    // }, []);


    return (
        <div className='main'>
            <div className='nav'>
                <p>Welcome to the Legal AI</p>
                <img src={assets.user_prof_icon} alt="user_icon" />
            </div>

            <div className='main-content'>

                {!showResults
                    ? <>
                        <div className='main-content-greet'>
                            <p><span>
                                Hello, I am Legal AI
                            </span></p>
                            <p>I am here to help you with your legal queries</p>
                        </div>

                        <div className='main-content-cards'>
                            <div className='card'>
                                <img src={assets.compass_icon} alt="compss_icon" />
                                <p>Find me Employment related Cases</p>
                            </div>

                            <div className='card'>
                                <img src={assets.bulb_icon} alt="bulb_icon" />
                                <p>Help me with getting resources on Housing</p>
                            </div>

                            <div className='card'>
                                <img src={assets.code_icon} alt="compss_icon" />
                                <p>Where can I get legal support?</p>
                            </div>

                            <div className='card'>
                                <img src={assets.message_icon} alt="compss_icon" />
                                <p>What resources are available for me?</p>
                            </div>

                        </div>


                    </>
                    : <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt="compss_icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.law_icon} alt="compss_icon" />

                            {loading ? <div className='loader' >
                                <hr />
                                <hr />
                                <hr />
                            </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}


                        </div>
                    </div>
                }

                <div className='main-bottom-content'>
                    <div className='main-bottom-search-box'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Prompt your legal queries' />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery_icon" />
                            <img src={assets.mic_icon} alt="mic_icon" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="send_icon" /> : null}
                        </div>
                        {/* <button>Search</button> */}
                    </div>

                    <div className='main-bottom-quick-info'>
                        <p>Disclaimer: This chatbot provides general information and resources but does not offer legal advice. For specific legal concerns, consult a qualified attorney.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;