import './PopUp.scss';
import doneIcon from '../../assets/images/mdi_done.svg'
import closeIcon from '../../assets/images/mdi_close.svg'

const PopUp = ({onClosed}) => {
    return (
        <div className="pop-up">
            <div className="pop-up-content">
                <img className="close-icon" onClick={onClosed} src={closeIcon} alt="mdi_close.svg"/>
                <img className="done-icon" src={doneIcon} alt="mdi_done.svg"/>
                <p className="pop-up-info">Відправлено</p>
                <br/>
                <button onClick={onClosed} className="pop-up-button">Ок</button>
            </div>
        </div>
    )
}

export default PopUp;