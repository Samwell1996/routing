import React, {Fragment} from 'react'
import { ButtonRev } from "../../components";
import { useHistory } from 'react-router-dom'

export const ReviewsDetails = () => {

    const history = useHistory();

    function goToReviewsPage(event) {
        event.preventDefault();
        history.push('/reviews');

    }

    return (
        <Fragment>
            <ButtonRev onClick={goToReviewsPage}>
                Back
            </ButtonRev>
        </Fragment>
    )
};
