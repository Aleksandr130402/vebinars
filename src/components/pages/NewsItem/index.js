import { useState } from 'react';

import './NewsItem.scss';

import favoriteIcon from '../../../assets/images/favorite.svg';
import chatBubbleIcon from '../../../assets/images/chat_bubble.svg';

const NewsItem = ({selectedItem}) => {

	const {title, image, details, time} = selectedItem;

	const [ likes ] = useState(8700);
	const [ comments ] = useState(9700);

	return (
		<article className="content-item">
			<h2>{title}</h2>
			<img className="news-image" src={image} alt="news"/>
			<p>{details}</p>
			<div className="content-item-bottom">
				<span>{time}</span>
				<span><img src={favoriteIcon} alt="favorite"/>{likes}</span>
				<span><img src={chatBubbleIcon} alt="chat-bubble"/>{comments}</span>
			</div>
		</article>
	)
}

export default NewsItem;