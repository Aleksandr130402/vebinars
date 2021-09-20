import ContentItemBottom from '../../ContentItemBottom';
import './content-item-details.scss';

const ContentItemDetails = ({selectedItem}) => {
    const {time, date, title, overload} = selectedItem;
    return (
        <div className="content-item">
            <p className="content-item-top">{title}</p>
            <img className="content-video" src={overload.video} alt="video.png"/>
            <p className="content-details">{overload.details}</p>
            <div className="material">
                <h2 className="material-header">Додаткові матеріали:</h2>
                {overload.materials.map((name, idx) => {
                    return (
                        <button key={idx} className="material-button"><img src="src\assets\images\description.png"/>{name}</button>
                    )
                })}
            </div>
            
            <ContentItemBottom time={time} date={date}/>
        </div>  
    )
}

export default ContentItemDetails;