import React from 'react';
import Header from './Header';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;
