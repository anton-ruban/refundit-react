import React, { Component } from 'react';
import * as utils from '../../common/utils';
import Front from './Front';
import RefundStep from './RefundStep';
import Describe from './Describe';
import AboutUs from './AboutUs';
import Footer from './Footer';

const classes = utils.createStyles('Home', {
    container: {
      fontSize: 20,
    },
    '@media (max-width: 1800px)': {
      container: {
        fontSize: 18,
      }
    },
    '@media (max-width: 1600px)': {
      container: {
        fontSize: 16,
      }
    },
    '@media (max-width: 1400px)': {
      container: {
        fontSize: 14,
      }
    },
    '@media (max-width: 1200px)': {
      container: {
        fontSize: 11,
      }
    }
});

class Home extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Front />
        <RefundStep />
        <Describe />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default Home;
