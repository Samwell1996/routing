import React from 'react'
import {Text} from "../index";
import { Link} from 'react-router-dom'
import {routes} from "../../configRoutes";


export const ItemInput = ({ text, id,  }) => {


    return (
        <Link
            to={`${routes.DETAILS}${id}/${text}`}>
            <Text>
                {text}
            </Text>
        </Link>
    )
};

export default ItemInput
