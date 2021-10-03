import React from 'react'

type Props = {
    value: number,
    prefix?: string,
    suffix?: string,
}

const ChangeIndicator: React.FC<Props> = ({value, prefix, suffix}) => {
    return (
        <>
        { value > 0 
            ? (
                <div className="dash-value__value-indicator dash-value__value-indicator--up">
                    <div>
                    {prefix}
                    {value.toLocaleString('en', {useGrouping:true})}
                    {suffix}
                    <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                    </div>
                </div>
                ) 
            : (
                <div className="dash-value__value-indicator dash-value__value-indicator--down">
                    <div>
                        {prefix}
                        {Number(value - value * 2).toLocaleString('en', {useGrouping:true})}
                        {suffix}
                        <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                    </div>
                </div>
            )}
            </>
    )
}

export default ChangeIndicator
