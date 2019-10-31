import React from 'react'
import T from 'prop-types'
import './Text.css'

export const Text = ({children}) => (


    <div className='Text'>
        {children}
    </div>
);
export default Text
Text.propTypes = {
    children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired,
};

