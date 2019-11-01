import React, {Fragment, useMemo} from 'react'
import { ButtonRev } from "../../components";
import { useHistory, useParams } from 'react-router-dom'
import './ReviewsDetails.css'

export const ReviewsDetails = ({setVisible}) => {

    const history = useHistory();
    let params = useParams();

    const review = useMemo(()=> {
        const rev =  localStorage.getItem(`reviews`);
        const array = JSON.parse(rev) || [];
        return array.find(element => element.id === params.id)|| {}

    },[]);

    function goToReviewsPage(event) {
        event.preventDefault();
        history.push('/reviews');
        setVisible(true);

    }

    return (
        <Fragment>
            <div className='ReviewsDetails'>
                {review.text}
            </div>
            <div className='ReviewsButton'>
                <ButtonRev onClick={goToReviewsPage}>
                    Back
                </ButtonRev>
            </div>

        </Fragment>
    )
};
