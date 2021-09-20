import './content-item-bottom.scss';

const ContentItemBottom = ({time, date}) => {
    return (
        <div className="content-item-bottom">
            <span>{time}</span>
            <span>{date}</span>
        </div>
    )
}

export default ContentItemBottom;