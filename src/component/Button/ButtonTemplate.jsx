import React from 'react'


const Button = props => {

    return (
        <div className={'buttonTemplate'}>
            <button
                onClick={props.onClick}
                className={props.disabled ? 'buttonTemplate__btn buttonTemplate__btn_disabled' : 'buttonTemplate__btn'}
                disabled={props.disabled}
            >
                {props.text}
            </button>
        </div>
    )
}
export default Button;