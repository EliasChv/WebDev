import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { createRoot } from 'react-dom/client'  
import { StrictMode } from 'react' 

import './index.css'
import App from './App.tsx'
import EnergyApp from './energy-app.tsx'
import WaterValve from './water-valve.tsx'
import DataVisualization from './data-visualization.tsx'
import Resume from './resume.tsx'
import Credentials from './Credentials.tsx'
import Projects from './Projects.tsx'
import Minesweepergame from './Minesweepergame.tsx'
import Plantproj from './Plantproj.tsx'
import GradeCalc from './GradeCalc.tsx'
import Calculator from './Calculator.tsx'
import Slots from './Slots.tsx'
import Blackjack from './Blackjack.tsx'
import Toolkit from './Toolkit.tsx'
import Snake from './Snake.tsx'

createRoot( document.getElementById( 'root' )! ).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/data-visualization" element={ <DataVisualization/> }/>
				<Route path="/water-valve" element={ <WaterValve/> }/>
				<Route path="/energy-app" element={ <EnergyApp/> }/>
				<Route path="/resume" element={ <Resume/> }/>
				<Route path="/Credentials" element={ <Credentials/> }/>
				<Route path="/Projects" element={ <Projects/> }/>
				<Route path="/Minesweepergame" element={ <Minesweepergame/> }/>
				<Route path="/Plantproj" element={ <Plantproj/> }/>
				<Route path="/GradeCalc" element={ <GradeCalc/> }/>
				<Route path="/Calculator" element={ <Calculator/> }/>
				<Route path="/Slots" element={ <Slots/> }/>
				<Route path="/Blackjack" element={ <Blackjack/> }/>
				<Route path="/Snake" element={ <Snake/> }/>
				<Route path="/Toolkit" element={ <Toolkit/> }/>
				<Route path="*" element={ <App/> }/>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)