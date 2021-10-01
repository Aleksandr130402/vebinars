import { useState } from 'react';

import './Menu.scss';
import avatar from '../../assets/images/avatar.png';
import closeIcon from '../../assets/images/close.svg';
import arrowIcon from '../../assets/images/arrow.svg'
import { Link } from 'react-router-dom';

const Menu = ({onClosed, menu}) => {
    const [openList, addOpenList] = useState(false);

    function closeMenu(e) {
        if(e.target.tagName === "A")
            onClosed();
    }

    return (
        <div className={`menu ${menu ? "active" : ""}`}>
            <nav onClick={(e) => closeMenu(e)}>
                <button type="button" className="close-menu" onClick={onClosed}>
                    <img src={closeIcon} alt="close"/>
                </button>
                <div className="top">
                    <img id="avatar" src={avatar} alt="avatar"/>
                    <div className="user-info">
                        <span className="initials">Юлий Фомин</span>
                        <span className="position">Продакт менеджер</span>
                    </div>
                </div>
                <ul className="list-items">
                    <li><Link to="/">Головна сторінка</Link></li>
                    <li className={`with-arrow ${openList ? "show" : ""}`} onClick={() => addOpenList(!openList)}>
                        Побажання
                        <img className={`arrow-icon`} src={arrowIcon} alt="arrow"/>
                        <ul className={`list-extra`}>
                            <li><Link to="/">1</Link></li>
                            <li><Link to="/">2</Link></li>
                            <li><Link to="/">3</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/news">Новини</Link></li>
                    <li><Link to="/">Доступність</Link></li>
                    <li><Link to="/">Дні народження</Link></li>
                </ul> 
                <ul className="support">
                    <li><a href="/">Підтримка</a></li>
                    <li><a href="/">Налаштування</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;