import React from 'react'

type Props = {
    secondary?: boolean
}

const Button: React.FC<Props> = ({children, secondary}) => {
    return (
        <button className={`dash-btn ${secondary && 'dash-btn--secondary'}`}>
            {children}
        </button>
    )
}

export default Button
