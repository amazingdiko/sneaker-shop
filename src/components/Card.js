import React from "react";

function Card() {
    return (
    <div className="card">
    <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
    </div>
    <img width={133} height={112} src="/img/sneakers/sneakers1.jpg" alt="Sneaker1" />
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column">
        <span>Цена: </span>
        <b>12 999р</b>
        </div>
        <button className="button">
        <img width={13} height={13} src="/img/plus.svg" alt="Plus" />
        </button>
    </div>
    </div>
    );
}

export default Card;