import { useState } from 'react';

import './Menu.scss';
import avatar from '../../assets/images/avatar.png';
import closeIcon from '../../assets/images/close.svg';
import arrowIcon from '../../assets/images/arrow.svg'

const Menu = ({onClosed}) => {
    const [openList, addOpenList] = useState(false);

    return (
        <div className="menu">
            <div className="menu-content">
            <img className="close-menu" onClick={onClosed} src={closeIcon} alt="close"/>
                <header>
                    <img id="avatar" src={avatar} alt="avatar"/>
                    <div className="user">
                        <span className="initials">Юлий Фомин</span>
                        <span className="position">Продакт менеджер</span>
                    </div>
                </header>
                <hr/>
                <ul className="list-items">
                    <li>Головна сторінка</li>
                    <li className={`with-arrow ${openList ? "bg-grey" : ""}`} onClick={() => addOpenList(!openList)}>
                        Побажання
                        <img className={`arrow-icon ${openList ? "active" : ""}`} src={arrowIcon} alt="arrow"/>
                        <ul className={`list-extra ${openList ? "show" : ""}`}>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </li>
                    <li>Новини</li>
                    <li>Доступність</li>
                    <li>Дні народження</li>
                </ul>
                <hr/>
                <ul className="support">
                    <li>Підтримка</li>
                    <li>Налаштування</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;