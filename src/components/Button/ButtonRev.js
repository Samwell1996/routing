import React, {Fragment} from 'react'
import './Button.css'

function ButtonRev ({children, onClick}) {

    return (
        <Fragment>
            <button onClick={onClick} className='buttonRev'> {children}</button>
        </Fragment>

    )


}

export default ButtonRev
