import React from 'react';
import './styles/Global.css'
import './styles/App.css';
import WeaponList from './WeaponList';
import WeaponPanel from './WeaponPanel';

class App extends React.Component {
	render() {
		return (
			<main>
				<WeaponList />
				<WeaponPanel />
			</main>
		);
	}
}

export default App;