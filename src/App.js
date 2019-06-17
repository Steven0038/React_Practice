import React from 'react';
// import logo from './logo.svg';
import logo from './logo.jpeg'
import './App.css';
import Oath from './Oath';
import { ReactComponent as HeartSVG } from './heart.svg';
import { ReactComponent as SadSVG } from './sad.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oathCount: 6000,
    };
  }

  handleHeartClick = () => {
    const currentOathCount = this.state.oathCount;
    this.setState({
      oathCount: currentOathCount + 1,
    });
    // alert("hahahhha")
  }

  handleSadClick = () => {
    const currentOathCount = this.state.oathCount; // get current parameter value, from constructor
    this.setState({ // set State value
      oathCount: currentOathCount - 1,
    });
  }

  render() {
    const { oathCount } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Oath count={oathCount}/>
          <div className="action-area">
            <button className="button heart-button" onClick={this.handleHeartClick}>
              <HeartSVG />
            </button>
            <button className="button sad-button" onClick={this.handleSadClick}>
              <SadSVG />
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

/* old original code.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I love you three thousand!.
        </a>
      </header>
    </div>
  );
}

export default App;
*/
