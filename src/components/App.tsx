import React from 'react';
import './styles/Global.css'
import './styles/App.css';
import WeaponList from './WeaponList';
import WeaponPanel from './WeaponPanel';
import TargetPanel from './TargetPanel';

class App extends React.Component {
	render() {
		return (
			<main>
				<div>
					<WeaponList />
					<WeaponPanel />
				</div>
				<TargetPanel />
			</main>
		);
	}
}

export default App;