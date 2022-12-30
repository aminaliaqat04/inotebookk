import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            <div className='absolute bottom-4 right-4 w-80'>
                {props.alert && <div className={`alert alert-${props.alert.type} px-4 py-10 relative text-center text-sm animate__animated animate__slideInRight`} role="alert">
                    <strong>{capitalize(props.alert.type)}! </strong><span className="block sm:inline">{props.alert.message}</span>
                </div>}
            </div>
        </>
    )
}

export default Alert
