import "./News.scss";

import newsImage from "../../../assets/images/img_news.png";
import favoriteIcon from '../../../assets/images/favorite.svg';
import chatBubbleIcon from '../../../assets/images/chat_bubble.svg';

const News = () => {
	return (
		<article className="content-item">
			<h2>3 липня 11:00 Лекція-презентація: 
				«Сортування для «чайників», 
				або Як почати сортувати сміття вдома».
			</h2>
			<img className="news-image" src={newsImage} alt="news"/>
			<p>
				Pub Quiz – це командна інтелектуальна гра, 
				яку вигадали у Великобританії, а ми із 
				задоволенням підхопили та зробили кращою 
				для Silpo. Для всіх колег, які хочуть 
				дізнаватися одне про одного щось, 
				крім переліку робочих обов'язків.
			</p>
			<p>
				Гра складається з різних раундів – текстових, 
				інтерактивних та інших
			</p>
			<div className="content-item-bottom">
				<span>11:00 | 27.05.20</span>
				<span><img src={favoriteIcon} alt="favorite"/>8700</span>
				<span><img src={chatBubbleIcon} alt="chat-bubble"/>9700</span>
			</div>
		</article>
	)
}

export default News;