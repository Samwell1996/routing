import React from 'react'
import './Button.css'

function Button ({onClick, children}) {

    return (

        <div onClick={onClick} className="frame">
            <div className="button">
                <span> {children} </span>
                <svg>
                    <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0">

                    </polyline>
                    <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0">

                    </polyline>
                </svg>
            </div>

        </div>

    )


}

export default Button
