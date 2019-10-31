import React, { useState }from 'react'
import './Input.css'
import T from 'prop-types'

function Input({ onAdd }) {

    const [value, setValue] = useState('');

    const onChange = event => setValue(event.target.value);

    const onSubmit = event => {
        event.preventDefault();
        if(value === '') return;
        onAdd(value);
        setValue('');
    };
    return  (
            <form className='getInput' onSubmit={onSubmit}>
                <input
                    className="Input"
                    placeholder="  Your review.."
                    {...{value}}
                    onChange={onChange}

                />
            </form>
    )
}
export default Input

Input.propTypes = {
    onAdd: T.func.isRequired
};
