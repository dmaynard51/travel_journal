import React from 'react'

export default function Card(props) {
    return (
        <div className="travel--div">
            <img className="travel--pic" src={props.item.imageUrl} />
            <div className="card--description">
                <div className="location--info">
                    <img className='location-pin' src="../images/location.png"/>
                    <p className='location'>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>
                    <p className="googleMapsData">View on Google Maps</p>
                    </a>

                </div>
            <h1>{props.item.title}</h1>
            <p className="start-end-dates">{props.item.startDate + " - " + props.item.endDate}</p>
            <p className="location-description">{props.item.description}</p>
            </div>
        </div>
    )
}