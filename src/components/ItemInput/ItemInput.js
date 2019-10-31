import React from 'react'
import {Text} from "../index";


export const ItemInput = ({ review }) => {
    return (
        <div >
            <Text>
                {review.text}
            </Text>
        </div>
    )
};

export default ItemInput
