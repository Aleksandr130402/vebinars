import ContentItemBottom from '../../ContentItemBottom';
import buttonIcon from '../../../assets/images/description.png';
import videoPoster from '../../../assets/images/video.png';

import './ContentItemDetails.scss';

const ContentItemDetails = ({selectedItem}) => {
    const {time, date, title, overload} = selectedItem;
    return (
        <div className="content-item">
            <p className="content-item-top">{title}</p>
            <video className="video" poster={videoPoster}>
                <source src={overload.video}></source>
            </video>
            <p className="details">{overload.details}</p>
            <div className="material">
                <h2 className="material-header">Додаткові матеріали:</h2>
                {overload.materials.map((name, idx) => {
                    return (
                        <button key={idx} className="material-button"><img src={buttonIcon}/>{name}</button>
                    )
                })}
            </div>
            
            <ContentItemBottom time={time} date={date}/>
        </div>  
    )
}

export default ContentItemDetails;