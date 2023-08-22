import {SiChatbot} from 'react-icons/si'
import './index.css'

const Support = (props) => {
    const { history } = props;
    const onClickBot = () => {
        history.replace("/chat");
    }
    return(
    <>
    <div className="support-container">
        <p className='para'>Use Chat Bot below for basic support</p>
        <p className='para'>If you are not satisfied email us or use call support</p>
        <br/>
        <p className='para'>Email: abcd@gmail.com</p>
        <p className='para'>Ph.No.: 9999999999</p>
    </div>
    <div className="bot-button">
        <button className='chatbot-button' onClick={onClickBot}><SiChatbot /></button>
    </div>
    </>
)
    }

export default Support