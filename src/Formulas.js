import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'mini-store';

// import { Provider, create, connect } from 'mini-store';
// class Formulas extends React.Component {
//   static propTypes = {
//     name: PropTypes.string,
//   };

//   static defaultProps = {
//     name: 'my name',
//   };

//   constructor(props) {
//     super(props);
//     const { name } = this.props;
//     this.state = {
//       name,
//     };
//   }

//   render() {
//     const node = ReactDOM.findDomNode(<button type="button">2</button>);
//     const { name } = this.state;
//     return (
//       <Provider>
//         <div>
//           Index Formulas.js {name}
//           {node}
//         </div>
//       </Provider>
//     );
//   }
// }

// export default Formulas;
export default class Formulas extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'my name',
  };

  constructor(props) {
    super(props);
    const { name } = this.props;
    this.state = {
      name,
    };
  }

  render() {
    const node = ReactDOM.findDomNode(<button type="button">2</button>);
    const { name } = this.state;

    return (
      <Provider>
        <div>
          Index Formulas.js {name} {node}
        </div>
      </Provider>
    );
  }
}

// Formulas.DefaultProps = {
//   name: '111',
// };

// Formulas.PropTypes = {
//   name: PropTypes.string,
// };
