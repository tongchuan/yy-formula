import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
	    return (
	    	<div>Demo</div>
	    )
	}
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
