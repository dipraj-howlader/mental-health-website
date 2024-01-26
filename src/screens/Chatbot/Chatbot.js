import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot({ onClose }) {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am Lina from Safental.Com",
            sender: "ChatGPT",
        },
    ]);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSend = async (event) => {
        event.preventDefault();

        const newMessage = {
            message: input,
            sender: "user",
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);
        setInput('');

        await processMessageToChatGPT(newMessages);
    };

    const processMessageToChatGPT = async (chatMessages) => {
        const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

        let apiMessages = chatMessages.map((messageObject)=>{
            let role="";
            if(messageObject.sender === "ChatGPT"){
                role = "assistant"
            }else{
                role = "user"
            }
            return (
                {role: role, content: messageObject.message}
            )
        });

        const systemMessage = {
            role: "system",
            content: "Explain all concept like I am 10 years old"
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.choices[0].message.content);
                setMessages([
                    ...chatMessages,
                    {
                        message: data.choices[0].message.content,
                        sender: "ChatGPT",
                    },
                ]);
            });
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <span>Chat Support</span>
                <div className="close-button" onClick={onClose}>
                    Close
                </div>
            </div>
            <div className="response-area">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={
                            message.sender === "ChatGPT"
                                ? 'assistant-message message'
                                : 'user-message message'
                        }
                    >
                        {message.message}
                    </div>
                ))}
            </div>
            <div className="prompt-area">
                <input
                    type="text"
                    placeholder="Send a message..."
                    value={input}
                    onChange={handleChange}
                />
                <button className="submit" type="submit" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chatbot;
