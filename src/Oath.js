import React from 'react';

class Oath extends React.Component {
  render() {
  	const{ count } = this.props;
    
    return (
      <p>I Love You Three { count }.</p>
    )
  }
}

export default Oath;