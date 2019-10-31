import React from 'react'
import './ModalWindow.css'
import T from 'prop-types'


function ModalWindow({onSubmit, isVisible, children}) {

    return isVisible && (
        <div className='modal-window'>
            <button onClick={onSubmit} className='modalClose'>OK</button>
            <div>
                {children}
            </div>
        </div>
    )
}
ModalWindow.propTypes = {
    onSubmit: T.func,
    isVisible: T.bool,
    children: T.node

};
ModalWindow.defaultProps = {
    isVisible: false,
};
export default ModalWindow

