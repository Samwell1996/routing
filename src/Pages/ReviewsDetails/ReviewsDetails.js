import React, {Fragment} from 'react'
import { ButtonRev } from "../../components";
import { useHistory, useParams } from 'react-router-dom'
import './ReviewsDetails.css'

export const ReviewsDetails = ({setVisible}) => {

    const history = useHistory();
    let params = useParams();

    function goToReviewsPage(event) {
        event.preventDefault();
        history.push('/reviews');
        setVisible(true);

    }

    return (
        <Fragment>
            <div className='ReviewsDetails'>
                {params.text}
            </div>
            <div className='ReviewsButton'>
                <ButtonRev onClick={goToReviewsPage}>
                    Back
                </ButtonRev>
            </div>

        </Fragment>
    )
};
