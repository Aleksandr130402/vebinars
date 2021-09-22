import './ContentItem.scss';
import ContentItemBottom from '../ContentItemBottom';

const ContentItem = ({data, onClicked}) => {

    return (
        data.map(({id, title, time, date}, idx) => {
            return (
                <div key={idx} className="content-item">
                    <h2 className="content-item-top" onClick={() => onClicked(id)}>{title}</h2>
                    <ContentItemBottom time={time} date={date}/>
                </div>
            )
        })  
    )
}

export default ContentItem;