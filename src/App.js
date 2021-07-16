import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import projects from './projects/projects';

function App() {
	return (
		<div>
			<Portfolio projects={projects} />
		</div>
	);
}

export default App;
