import React from 'react'
import {Text} from "../index";
import { Link} from 'react-router-dom'
import {routes} from "../../configRoutes";


export const ItemInput = ({ id, text }) => {


    return (
        <Link
            to={`${routes.DETAILS}${id}`}>
            <Text>
                {text}
            </Text>
        </Link>
    )
};

export default ItemInput
