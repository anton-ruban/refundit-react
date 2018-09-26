import React, { Component } from 'react';
import * as utils from '../../common/utils';
import PhoneIcon from '../../assets/images/contact_phone.png';
import FacebookIcon from '../../assets/images/facebook_icon.png';
import LinkedinIcon from '../../assets/images/linkedin_icon.png';

const classes = utils.createStyles('FooterMobile', {
    container: {
      height: 80,
      minWidth: 320,
      display: 'flex',
      alignItems: 'center',
      color: '#00ad96',
      padding: '0 3%',
      justifyContent: 'space-between'
    },
    leftText: {
      fontSize: '1.3em',
    },
    rightText: {
      fontSize: '1.2em',
    },
    '@media (max-width: 700px)': {
      container: {
        height: 70,
      }
    },
    '@media (max-width: 600px)': {
      container: {
        height: 60,
      }
    },
    '@media (max-width: 500px)': {
      container: {
        height: 50,
      }
    },
    '@media (max-width: 400px)': {
      container: {
        height: 40,
      }
    },
});

class FooterMobile extends Component {
  render() {
    return (
      <div className={classes.container}>
        <span className={classes.leftText}>support@refundit.tax</span>
        <span className={classes.rightText}>.כל הזכויות שמורות Refundit 2018 ©</span>
      </div>
    );
  }
}

export default FooterMobile;
