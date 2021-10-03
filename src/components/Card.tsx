import React from 'react'

const Card: React.FC = ({children}) => {
    return (
        <div className="dash-card">
            {children}
        </div>
    )
}

type CardHeadingProps = {
    heading: string
}

export const CardHeader: React.FC<CardHeadingProps> = ({children, heading}) => {
    return (
        <div className="dash-card__header">
            <>
            <h2 className="dash-card__heading">{heading}</h2>
            {children}
            </>
        </div>
    )
}

export const CardFooter: React.FC= ({children}) => {
    return (
        <div className="dash-card__footer">
            {children}
        </div>
    )
}

export const CardBody: React.FC = ({children}) => {
    return (
        <div className="dash-card__body">
            {children}
        </div>
    )
}

export default Card
