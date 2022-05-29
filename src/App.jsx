import "./App.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import RecomendedForYou from "./components/RecomendedForYou";
import MostPlayed from "./components/MostPlayed";
import NewLaunches from "./components/NewLaunches";

function App() {
	return (
		<div className="App-wrapper">
			<Sidebar />
			<div className="App-panel">
				
				<div className="mobileBranding">
					<h2 className="App-logo">GameRix</h2>
				</div>

				<Header/>

				<div className="mainContent">
					<RecomendedForYou/>
					<NewLaunches/>
					<MostPlayed />
				</div>
			</div>
		</div>
	);
}

export default App;
