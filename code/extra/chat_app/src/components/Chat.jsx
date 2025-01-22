import React, { useState, useEffect} from "react";
import io from 'socket.io-client'
import './css/Chat.css'

const socket = io('http://localhost:5000')

const Chat = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on('chat message', (msg) => {
            setMessages([...messages, msg])
        })
        return () => socket.off('chat message')   
    }, [messages])

    const sendMessage = (message) => {
        socket.emit('chat message', message)
    }

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center p-4">
                <div className="card card-main">
                    <div className="card-header">
                        <h4>Chat</h4>
                    </div>
                    <div className="card-body card-body-messages">
                        
                    </div>
                    <div className="card-body card-footer">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat