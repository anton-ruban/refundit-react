import React, { Component } from 'react';
import Home from './components/home/Home';
import HomeMobile from './components/home-mobile/HomeMobile';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth
    });
  }

  render() {
    const {width} = this.state;
    const isMobile = width < 800;
    return (
      <div className="App">
        {isMobile ? <HomeMobile/> : <Home />}
      </div>
    );
  }
}

export default App;
