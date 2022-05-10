import './App.css';

function App() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		window.close();
	};

	return (
		<div className="App">
			<header className="App-header">
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Input 1" />
					<input type="text" placeholder="Input 2" />
					<input type="text" placeholder="Input 3" />
					<button type="submit">Submit</button>
				</form>
			</header>
		</div>
	);
}

export default App;
