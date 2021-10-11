import { useState } from 'react';

import "./NewsItem.scss";

import favoriteIcon from '../../../assets/images/favorite.svg';
import chatBubbleIcon from '../../../assets/images/chat_bubble.svg';

const NewsItem = ({data, onClicked}) => {

	const [ countLikes ] = useState(8700);
	const [ countComments ] = useState(9700);

	return (
		data.map(({id, title, image, time}, idx) => {
			return (
				<article className="news" key={idx} onClick={() => onClicked(id)}>
					<img className="news-image" src={image} alt="news"/>
					<div className="news-info">
						<h2>{title}</h2>
						<div className="content-item-bottom">
							<span>{time}</span>
							<div>
								<span>
								<img src={favoriteIcon} alt="favorite"/>
								{countLikes}
								</span>
								<span>
								<img src={chatBubbleIcon} alt="chat-bubble"/>
								{countComments}
								</span>
							</div>
						</div>
					</div>
				</article>
			)
		})
	)
}

export default NewsItem;