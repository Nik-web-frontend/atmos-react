import React from 'react'
import './cardContent.css'

const CardContent = ({ data }) => {
    let Icon = data.icon
    return (
        <>
            <div className="card-content">
                <div className="icon-container">
                    <Icon className="extra-icon" size={30} />
                </div>
                <div className="text">
                    <p className='extra-title'>{data.title}</p>
                    <p className='extra-value'>{data.value}</p>
                </div>
            </div>
        </>
    )
}

export default CardContent