import React from 'react'
import classes from './InputTemplate.module.scss'

const InputTemplate = props => {


    return (
        <div className='inputTemplate'>
            <label className={classes['inputTemplate__label']}>
                <div>{props.label}</div>
                <input
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    className={classes['inputTemplate__input']}
                />
            </label>
        </div>
    )
    
}

export default InputTemplate;