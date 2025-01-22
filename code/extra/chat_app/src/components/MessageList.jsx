import Message from './Message'

const MessageList = ({ messages }) => {
    return (
        <ul>
            {messages.map((msg, index) => (
                <Message key={index} message={msg}/>
            ))}
        </ul>
    )
}

export default MessageList
