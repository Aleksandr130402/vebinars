import ContentItemBottom from '../ContentItemBottom';
import './ContentItem.scss';

const ContentItem = ({data, onClicked}) => {

    return (
        data.map(({id, title, time, date, overload}, idx) => {
            return (
                <div key={idx} className="content-item">
                    <a className="content-item-top" onClick={() => onClicked(id)}>{title}</a>
                    <ContentItemBottom time={time} date={date}/>
                </div>
            )
        })  
    )
}

export default ContentItem;