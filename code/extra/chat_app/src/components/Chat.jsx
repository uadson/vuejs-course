import React, { useState, useEffect} from "react";
import './css/Chat.css'
import MessageList from "./MessageList";
import InputArea from "./InputArea";


const Chat = () => {
    const [messages, setMessages] = useState([])
    const [backendStatus, setBackendStatus] = useState("Checking ...")
    const [ws, setWs] = useState(null)

    useEffect(() => {
        // verifica status do backend
        fetch('http://localhost:8000/api/health')
            .then(response => response.json())
            .then(data => setBackendStatus(data.status))
            .catch(() => setBackendStatus("Offline"))  
    }, [])

    useEffect(() => {
        const websocket = new WebSocket("ws://localhost:8000/ws")
        
        websocket.onopen = () => {
            console.log("Conectado ao WebSocket")
            setWs(websocket)
        }

        websocket.onmessage = (e) => {
            setMessages(prevMessages => [...prevMessages, e.data])
        }

        websocket.onclose = () => console.log("Desconectado do WebSocket")
        websocket.onerror = (error) => console.error("Erro no WebSocket", error)

        return () => {
            websocket.close()
        }
    }, [])

    const sendMessage = (message) => {
        if(ws && ws.readyState === WebSocket.OPEN) {
            ws.send(message)
        } else {
            console.error("WebSocket não está conectado")
        }
    }

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center p-4">
                <div className="card card-main">
                    <div className="card-header">
                        <h4>Chat</h4>
                        <p>Backend Status: {backendStatus}</p>
                    </div>
                    <div className="card-body card-body-messages">
                        <MessageList messages={messages}/>
                    </div>
                    <div className="card-body card-footer">
                        <InputArea onSendMessage={sendMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat