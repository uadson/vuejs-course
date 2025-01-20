import './Chat.css'
import LogoPrefGyn from '../assets/logo-pref-goiania.png'
import LogoPMG from '../assets/pmg-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Chat = () => {
    const departmentName = "Secretaria Municipal da Fazenda"

    return (
        <div className='container-fluid'>
        <div className='d-flex justify-content-center p-4'>
          <div className='card w-25 card-main'>
            <div className='card-header card-child-header'>
                <img src={LogoPrefGyn} alt='Logo' width="120"/>
            </div>
            <div className="card-body card-child-body">
              <div id="chatLog">
                <ul className='chat-list'>
                  <li>
                    <div className='d-flex flex-row justify-content-start mb-4'>
                      <img src={LogoPMG} alt="logo-pmg" className='chat-logo'/>
                      <div className='p-3 ms-3 message-received receiver'>
                        <p className="small mb-0"><strong>{departmentName}</strong></p>
                        <p className="small mb-0">Olá! Seja bem-vindo(a) ao Assistente Virtual da {departmentName}!</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-row justify-content-start mb-4">
                      <img src={LogoPMG} alt="logo-pmg" className='chat-logo' />
                      <div className="p-3 ms-3 message-received receiver">
                        <p className="small mb-0"><strong>{departmentName}</strong></p>
                        <p className="small mb-0">Antes de iniciarmos o atendimento, precisamos que nos informe alguns dados.<br/>
                                Por favor, informe o número do seu CPF (somente números):
                        </p>
                        </div>
                    </div>
                  </li>
                </ul>
                <ul id="messages"></ul>
              </div>
            </div>
            <div className="card-body p-4">
              <div className='d-flex inline'>
                <label>
                  <textarea className='form-control chat-textarea'></textarea>
                </label>
                <label>
                  <a type='submit' className='p-4'>
                    <FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff", height: "30"}} />
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Chat