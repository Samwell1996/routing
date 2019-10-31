import React, {Fragment, useState} from 'react'
import {Input, ButtonRev, ItemInput} from '../../components'
import './ReviewsPage.css'
import uuid from "uuid";

export const ReviewsPage = () => {

    const [reviews, setReviews] = useState([]);

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

    function onGoToReviews(e) {
        e.preventDefault();

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
            <div className='TextTop'>
                {reviews.map(
                review => <ItemInput
                    onClick={(e) => onGoToReviews(e)}
                    key={review._id}
                    {...{review}}
                /> )}
            </div>
        </Fragment>
    )
};
