import './styles/main.scss'

import Card, {CardHeader, CardFooter, CardBody} from './components/Card'

import PercentageBar from './PercentageBar';
import Button from './components/Button';
import ValueIndicator from './components/ChangeIndicator';
import Value from './components/Value';

import Chart from './components/Chart';

const data = [
  {name: '2:00', uv: 400, pv: 2400, amt: 2400}, 
  {name: '3:00', uv: 600, pv: 2400, amt: 2400},
  {name: '4:00', uv: 550, pv: 2400, amt: 2400},
  {name: '5:00', uv: 123, pv: 2400, amt: 2400},
  {name: '6:00', uv: 650, pv: 2400, amt: 2400},
  {name: '7:00', uv: 421, pv: 2400, amt: 2400},
  {name: '8:00', uv: 376, pv: 2400, amt: 2400},
  {name: '9:00', uv: 101, pv: 2400, amt: 2400},
  {name: '10:00', uv: 470, pv: 2400, amt: 2400},
  {name: '11:00', uv: 808, pv: 2400, amt: 2400},
  {name: '12:00', uv: 721, pv: 2400, amt: 2400},
  {name: '13:00', uv: 376, pv: 2400, amt: 2400},
  {name: '14:00', uv: 222, pv: 2400, amt: 2400},
]

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="g4">
        <Value
            title="Water"
            value={99999}
            change={12083}
            prefix="£"
            source="Price of Water (Year 2021)"
          />
        </div>
        <div className="g4">
          <Value
            title="Power"
            value={100}
            source="Power (Current)"
          />
        </div>
        <div className="g4">
        <Value
            title="Followers"
            value={512}
            change={84}
            source="Followers (Last Week)"
          />
        </div>
      
      <div className="g8">
      <div className="row">
      </div>
      <Card>
        <CardHeader heading="Sales over Time"></CardHeader>
        <CardBody>
          <PercentageBar title="Fuel Level" value={50} max={200}/>
          <PercentageBar title="Energy" value={10231} max={20000}/>
          <PercentageBar title="Speed" value={70} max={100}/>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <Value value={12.12} change={1.37} title="Price of Eggs" source="Year (2019)"/>
      <Card>
          <CardHeader heading="Sales over Time"></CardHeader>
          <CardBody>
            <Chart data={data}/>
          </CardBody>
      </Card>
      </div>
      <div className="g4">
      <Card>
        <CardHeader heading="Sales over Time"></CardHeader>
        <CardBody>
          <PercentageBar title="Fuel Level" value={62} max={100}/>
          <PercentageBar title="Energy" value={12} max={100}/>
          <PercentageBar title="Speed" value={70}/>
          <PercentageBar title="Another Level" value={100} max={100}/>
        </CardBody>
        <CardFooter>
          <Button>Download </Button>
          <Button secondary>Download </Button>
        </CardFooter>
      </Card>
      <Value value={12.12} change={1.37} title="Price of Eggs" source="Year (2019)"/>
      </div>
      </div>
    </div>
  );
}

export default App;
