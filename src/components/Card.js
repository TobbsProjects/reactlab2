import React from 'react'
import './Card.css';

export default function Card(props){
    console.log(props)
    return (
        <div className='card--container'>
            <img className="card--main-image" src={props.imageUrl} alt="" />
            <div className='card--text-container'>
                <h3 className="card--location">{props.location}</h3>
                <a href={props.googleMapsUrl} className="card--google-link gray">View on Google Maps</a>
                <h2 className='card--title'>{props.title}</h2>
                <p className='bold card--dates'>{props.startDate} - {props.endDate}</p>
                <p className='card--description'>{props.description}</p>
            </div>
        </div>
    )
}