import React from 'react';

import './styles/Global.css'
import './styles/TargetPanel.css';

class TargetPanel extends React.Component {
  render() {
    return (
      <div id='targetPanel'>
        <Target />
        <button id='fireBtn'>Fire!</button>
      </div>
    );
  }
}

class Target extends React.Component {
  render() {
    return (
      <div>
        <div id='targetbox'>
          <input id='head' type='radio' name='hitbox' className='hitbox'/>
          <input id='uppertorso' type='radio' name='hitbox' className='hitbox'/>
          <input id='arms' type='radio' name='hitbox' className='hitbox'/>
          <input id='lowertorso' type='radio' name='hitbox' className='hitbox'/>
          <input id='legs' type='radio' name='hitbox' className='hitbox'/>
        </div>
      </div>
    )
  }
}

export default TargetPanel;