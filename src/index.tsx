import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import DamageVisualizer from './components/DamageVisualizer';
import StatTracker from './components/StatTracker';
import { BrowserRouter,  Routes} from 'react-router-dom';
import { Route } from 'react-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='damage-visualizer' element={<DamageVisualizer />}/>
        <Route path='stat-tracker' element={<StatTracker />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
