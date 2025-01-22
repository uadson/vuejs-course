import {useState} from 'react'
import './css/InputArea.css'

const InputArea = ({onSendMessage}) => {
    
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDetault()
        onSendMessage(message)
        setMessage('')
    }
    
    return (
        <form onSubmit={handleSubmit} className='mt-3'>
            <div className="row">
                <div className="col-8">
                    <textarea
                        className='form-control'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className='col p-2'>
                    <button type='submit'>Enviar</button>
                </div>
            </div>
        </form>
    )
}

export default InputArea