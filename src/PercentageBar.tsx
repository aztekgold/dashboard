import React, {useState, useEffect} from 'react'
import CountUp from 'react-countup'

type Props = {
    title?: string,
    max?: number,
    value: number
}

const PercentageBar: React.FC<Props> = ({title, max, value}) => {

    const [percentageValue, setPercentageValue] = useState<number>(0);

    useEffect(() => {
        const upperLimit:number = max ? max : 100
        setPercentageValue( Number((value / (upperLimit / 100)).toFixed(2)) )
    }, [max, value])

    return (
        <div className="dash-chart dash-chart--percentage-bar">
            <div className="dash-chart__header">
                <span className="dash-chart__title">{title}</span>
                <span className="dash-chart__value"><CountUp end={value} duration={.5}/>{max ? '/'+max : '%'}</span>
            </div>
            <div 
                className="dash-chart__percentage-bar" 
                style={{ "--percentage": percentageValue+'%' } as React.CSSProperties}
            >
            </div>
        </div>
    )
}

export default PercentageBar
