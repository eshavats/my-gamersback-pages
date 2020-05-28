import React from "react";
import "./Card.css";

const Card = (props) => {

    return (
        <div class="card">
            <img class="card-img-top" src={props.imageSrc} alt="image-card-1" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a class="small-text">{props.smallText}</a> <br />
                <div className="buttons">
                    <a href="#" class="btn btn-danger card-btn btn-1">Book Now</a>
                    <a href="#" class="btn btn-danger card-btn btn-2">More Details</a>
                </div>        
            </div>
        </div>
    );
};

export default Card;