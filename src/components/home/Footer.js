import React, { Component } from 'react';
import * as utils from '../../common/utils';
import PhoneIcon from '../../assets/images/contact_phone.png';
import FacebookIcon from '../../assets/images/facebook_icon.png';
import LinkedinIcon from '../../assets/images/linkedin_icon.png';

const classes = utils.createStyles('Footer', {
    container: {
      maxWidth: 1920,
      margin: '0 auto',
      minWidth: 1024,
    },
    greenSection: {
      background: '#00ad96',
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '23px 50px 23px 119px',
      color: 'white',
    },
    firstText: {
      marginLeft: '13%',
      color: '#00ad96',
      fontSize: '0.9em',
    },
    text: {
      color: '#00ad96',
      fontSize: '0.9em',
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 40,
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
    },
    right: {
      fontSize: '1.25em',
    },
    info: {
      fontSize: '1.35em',
      marginRight: 51,
    },
    contactIcon: {
      cursor: 'pointer',
      marginRight: 10,
    },
    '@media (max-width: 1800px)': {
      contactIcon: {
        width: 45,
      }
    },
    '@media (max-width: 1600px)': {
      contactIcon: {
        width: 39,
      }
    },
    '@media (max-width: 1400px)': {
      contactIcon: {
        width: 33,
      }
    },
    '@media (max-width: 1200px)': {
      contactIcon: {
        width: 26,
      }
    }
});

class Footer extends Component {
  render() {
    return (
      <div className={classes.container}>
        <span className={classes.text}>במקרים מסויימים תיתכן בקשה להגעה למכס, תקבלו הודעה על כך 4 שעות לפני הטיסה**</span>
        <span className={classes.firstText}>מוגבל למבקשי החזר באפליקציה בספטמבר-אוקטובר 2018 קוד קופון בלגיה2018 למימוש ההטבה עם שובכם לישראל*</span>
        <div className={classes.greenSection}>
          <div className={classes.flex}>
            <div className={classes.links}>
              <a href='https://www.facebook.com/RefunditIsrael' target='_blank'><img src={FacebookIcon} className={classes.contactIcon}/></a>
              <a href='https://www.linkedin.com/company/refundit-ltd' target='_blank'><img src={LinkedinIcon} className={classes.contactIcon}/></a>
              <img src={PhoneIcon} className={classes.contactIcon}/>
            </div>
            <span className={classes.info}>054-7171971</span>
            <span className={classes.info}>support@refundit.tax</span>
          </div>
          <div className={classes.right}>
             כל הזכויות שמורות .Refundit 2018 ©
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
