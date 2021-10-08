import { useState } from 'react';

import './NewsItem.scss';

import avatar from '../../../assets/images/image18.svg';
import favoriteIcon from '../../../assets/images/favorite.svg';
import chatBubbleIcon from '../../../assets/images/chat_bubble.svg';

const NewsItem = ({selectedItem}) => {

	const {title, image, details, time} = selectedItem;

	const [ countLikes ] = useState(8700);
	const [ countComments ] = useState(9700);

	return (
		<>
		<article className="content-item">
			<h2>{title}</h2>
			<img className="news-image" src={image} alt="news"/>
			<p>{details}</p>
			<div className="content-item-bottom">
				<span>{time}</span>
				<span><img src={favoriteIcon} alt="favorite"/>{countLikes}</span>
				<span><img src={chatBubbleIcon} alt="chat-bubble"/>{countComments}</span>
			</div>
		</article>
		<div className="user-comment">
			<img src={avatar} alt="avatar"/>
			<div>
				<span>Юлий Фомин</span>
				<input className="content-item" placeholder="Залишити коментар"/>
			</div>
		</div>
		<div className="comment-item">
			<img src={avatar} alt="avatar"/>
			<div className="content-item">
				<span>Юлий Фомин</span>
				<p>Тепер, коли ми знаємо, хто ти, я знаю, хто я. 
					Я не помиляюся! Це все має сенс! У коміксі ви знаєте, 
					як ви можете сказати, ким буде негідник? Він абсолютно 
					протилежний герою. І найчастіше вони друзі, як ти і я! 
					Я повинен був знати шлях назад, коли ... Знаєш чому, 
					Девіде? Через дітей. Вони називали мене Тепер, коли 
					ми знаємо, хто ти, я знаю, хто я. Я не помиляюся! 
					Це все має сенс! У коміксі ви знаєте, як ви можете 
					сказати, ким буде негідник? Він абсолютно протилежний 
					герою. І найчастіше вони друзі, як ти і я! Я повинен 
					був знати шлях назад, коли ... Знаєш чому, Девіде? 
					Через дітей. Вони називали мене ....Тепер, коли ми 
					знаємо, хто ти, я знаю, хто я. Я не помиляюся! Це все 
					має сенс! У коміксі ви знаєте, як 
				</p>
			</div>
		</div>
		</>
	)
}

export default NewsItem;