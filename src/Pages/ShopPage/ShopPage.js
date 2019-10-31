import React, { Fragment, useState } from 'react'
import { Button, ModalWindow } from "../../components";
import { useHistory } from 'react-router-dom'
import './ShopPage.css'



export const ShopPage = () => {

    const [isVisible, setVisible] = useState(false);
    const history = useHistory();

    function onGoToModal(event) {
        event.preventDefault();
        setVisible(true);
    }
    function onSubmit(event) {
        event.preventDefault();
        setVisible(false);
        history.push('/');

    }
    return (
        <Fragment>
            <div className='ShopPage'>
                Welcome to Shop
            </div>
            <Button onClick={onGoToModal}>Purchase</Button>
            <ModalWindow onSubmit={onSubmit} isVisible={isVisible}>
                There is no products now
            </ModalWindow>
        </Fragment>
    )
};
