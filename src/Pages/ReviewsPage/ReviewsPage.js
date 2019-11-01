import React, {Fragment, useState, useEffect} from 'react'
import {Input, ButtonRev, ItemInput} from '../../components'
import './ReviewsPage.css'
import uuid from "uuid";


export const ReviewsPage = ({setVisible}) => {

    // const localStorage = localStorage.getItem(`li`);
    // const parsedReviews = JSON.parse(localStorage);
    const [reviews, setReviews] = useState([]);

    //
    // useEffect(()=>{
    //     const strReviews = JSON.stringify(reviews);
    //     localStorage.setItem('reviews', strReviews)
    // },[reviews]);


    const onAdd = text => setReviews([
        ...reviews,
        {
            _id: uuid(),
            text
        }
    ]);
    function getClear(event) {
        event.preventDefault();
        setReviews([]);
    }
    function onClick(event) {
        event.preventDefault();
        setVisible(false);
    }

    return (
        <Fragment>
            <div>
                <Input onAdd={onAdd}/>
            </div>

            <div className='buttonReview'>
                <ButtonRev onClick={getClear}>
                    Clear all
                </ButtonRev>
            </div>
            <div className='TextTop' onClick={onClick}>
                {reviews.map(
                review => <ItemInput
                    key={review._id}
                    id={review._id}
                    text={review.text}
                /> )}
            </div>
        </Fragment>
    )
};
