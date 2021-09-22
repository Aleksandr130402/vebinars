import './Header.scss';
import notifIcon from '../../assets/images/notif.svg';
import menuIcon from '../../assets/images/menu.svg';

const Header = ({onNotif}) => {
    return (
        <header>
            <img className="menu" src={menuIcon} alt="menu.svg"/>
            <img onClick={onNotif} className="notif" src={notifIcon} alt="notif.svg"/>
            <h2>Вебінари</h2>
        </header>    
    )
}

export default Header;