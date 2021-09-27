import './Header.scss';
import notifIcon from '../../assets/images/notif.svg';
import menuIcon from '../../assets/images/menu.svg';

const Header = ({onNotif, onMenu}) => {
    return (
        <header className="header">
            <img onClick={onMenu} className="menu-icon" src={menuIcon} alt="menu.svg"/>
            <img onClick={onNotif} className="notif-icon" src={notifIcon} alt="notif.svg"/>
            <h2>Вебінари</h2>
        </header>    
    )
}

export default Header;