import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '2222',
    };
  }

  render() {
    const { name } = this.state;
    return <div>{name}Demo</div>;
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
