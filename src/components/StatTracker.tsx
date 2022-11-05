import React from 'react';
import './styles/StatTracker.css'
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

class StatTracker extends React.Component {
  
  render() {
    return (
      <main>
        <div id='statpanel'>
          <div className="wins">
            <CustomPieChart title='Bounty Extraction Rate' inputs={['Bounty Extracted', 'No Bounty Extracted']}/>
            <CustomPieChart title='Survival Rate' inputs={['Survived', 'Died']}/>
          </div>
          
        </div>
      </main>
    )
  }
}

type CPChartProps = {
  title: string;
  inputs: Array<String>;
}

type CPChartState = {
  data: Array<Object>;
}

//TODO Fill data state with variable amount of inputs from props
class CustomPieChart extends React.Component<CPChartProps, CPChartState> {
  state: CPChartState = {
    data: [
      { name: this.props.inputs[0], value: 5 },
      { name: this.props.inputs[1], value: 5 }
    ]
  }

  render() {
    return (
      <div className='pie'>
        <ResponsiveContainer width='100%' height='100%' minHeight='100px' >
          <PieChart width={100} height={100}>
            <Pie dataKey='value' data={this.state.data} fill="#54171c"></Pie>
            <Tooltip 
              itemStyle={
                {color: '#adb2b2'}
              }
            />
          </PieChart>
        </ResponsiveContainer>
        <div className='piecontrols'>
        </div>
      </div>
    )
  }
}

export default StatTracker;