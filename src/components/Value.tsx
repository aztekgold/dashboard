import React from 'react'
import Card, {CardBody} from './Card'
import ChangeIndicator from './ChangeIndicator'
import CountUp from 'react-countup';
import ChartMini from './ChartMini';

type Props = {
    title: string,
    value: number,
    prefix?: string,
    suffix?: string,
    change?: number,
    source?: string
}

const Value: React.FC<Props> = ({title, value, prefix, suffix, change = 0, source}) => {
    return (
        <Card>
            <CardBody>
            <div className="dash-value">
                <div className="dash-value__title mb-1">{title}</div>
                <div className="dash-value__value mb-1">
                    <span className="dash-heading--lg">{prefix}<CountUp decimal="," decimals={3} end={value} duration={.5}/>{suffix}</span>
                    <ChangeIndicator prefix={prefix} value={change} suffix={suffix}/>
                </div>
                <div className="dash-value__source">{source}</div>
            </div>
            </CardBody>
        </Card>
    )
}

export default Value
