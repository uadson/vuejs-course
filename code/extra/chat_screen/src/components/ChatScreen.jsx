import './ChatScreen.css'

const ChatScreen = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center p-4">
                <div className="card card-main">
                    <div className="card-header">
                        <h4>Chat</h4>
                    </div>
                    <div className="card-body card-body-messages">
                    <ul className='chat-messages'></ul>
                    </div>
                    <div className="card-body card-footer">
                        <form className='mt-3'>
                            <div className="row">
                                <div className="col-8">
                                    <textarea></textarea>
                                </div>
                                <div className="col p-2">
                                    <button>Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatScreen
