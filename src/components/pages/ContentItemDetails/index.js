import ContentItemBottom from '../../ContentItemBottom';
import buttonIcon from '../../../assets/images/description.svg';
import videoPoster from '../../../assets/images/video.png';

import './ContentItemDetails.scss';

const ContentItemDetails = ({selectedItem}) => {

    const {time, date, title, overload} = selectedItem;
    
    return (
        <article className="content-item">
            <h2 className="content-item-top">{title}</h2>
            <video className="video" src={overload.video} controls poster={videoPoster}/>
            <p className="details">{overload.details}</p>
            <div className="material">
                <h3 className="material-header">Додаткові матеріали:</h3>
                {overload.materials.map((name, idx) => {
                    return (
                        <a href="/" key={idx} className="material-link"><img src={buttonIcon} alt="icon"/>{name}</a>
                    )
                })}
            </div>
            
            <ContentItemBottom time={time} date={date}/>
        </article>  
    )
}

export default ContentItemDetails;