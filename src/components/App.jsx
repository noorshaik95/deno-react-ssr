import React from 'https://dev.jspm.io/react@16.13.1';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	render() {
		return (
			<div>
				<button onClick={() => {
this.setState({counter: this.state.counter + 1})}}>Click me</button>
				<h1>Counter is {this.state.counter} </h1>
			</div>
		);
	}
}

export default App