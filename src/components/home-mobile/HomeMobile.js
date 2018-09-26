import React, { Component } from 'react';
import * as utils from '../../common/utils';
import FrontMobile from './FrontMobile';
import RefundStepMobile from './RefundStepMobile';
import DescribeMobile from './DescribeMobile';
import AboutUsMobile from './AboutUsMobile';
import FooterMobile from './FooterMobile';
import ContactInfoMobile from './ContactInfoMobile';

const classes = utils.createStyles('HomeMobile', {
    container: {
      fontSize: 20,
    },
    '@media (max-width: 730px)': {
      container: {
        fontSize: 19,
      }
    },
    '@media (max-width: 700px)': {
      container: {
        fontSize: 18,
      }
    },
    '@media (max-width: 650px)': {
      container: {
        fontSize: 17,
      }
    },
    '@media (max-width: 600px)': {
      container: {
        fontSize: 16,
      }
    },
    '@media (max-width: 560px)': {
      container: {
        fontSize: 14,
      }
    },
    '@media (max-width: 500px)': {
      container: {
        fontSize: 13,
      }
    },
    '@media (max-width: 460px)': {
      container: {
        fontSize: 11,
      }
    },
    '@media (max-width: 400px)': {
      container: {
        fontSize: 10,
      }
    },
    '@media (max-width: 360px)': {
      container: {
        fontSize: 9,
      }
    }
});

class HomeMobile extends Component {
  render() {
    return (
      <div className={classes.container}>
        <FrontMobile />
        <RefundStepMobile />
        <DescribeMobile />
        <AboutUsMobile />
        <FooterMobile />
        <ContactInfoMobile />
      </div>
    );
  }
}

export default HomeMobile;
