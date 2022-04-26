import '../assets/styles/Cat.scss'

function Card(props) {
    return (
        <div className={(props.isSelected?"selected":"card")}>
            <div className={(props.firstColor)}>Безлимитный {props.price}</div>
            <div className={(props.secondColor)}>руб<span className="card-price">{props.price}</span>/мес</div>
            <div className="card-speed">до {props.speed} Мбит/сек</div>
            <div className="card-description">{props.description}</div>
        </div>
    );
}

export default Card;