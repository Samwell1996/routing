import React, {Fragment, useState, useMemo} from 'react'
import {Input, ButtonRev, ItemInput} from '../../components'
import './ReviewsPage.css'
import uuid from "uuid";


export const ReviewsPage = ({setVisible}) => {

    const initReviews = useMemo(()=> {
        const rev =  localStorage.getItem(`reviews`);
        return JSON.parse(rev);

    },[]);

    const [reviews, setReviews] = useState( initReviews || []);

    function onChangeReviews (newReviews) {
        const strReviews = JSON.stringify(newReviews);
        localStorage.setItem('reviews', strReviews);
        setReviews(newReviews);
    }


    const onAdd = text => onChangeReviews([
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
