import React, { Component } from 'react';
import * as utils from '../../common/utils';
import PhoneIcon from '../../assets/images/contact_phone.png';
import FacebookIcon from '../../assets/images/facebook_icon.png';
import LinkedinIcon from '../../assets/images/linkedin_icon.png';

const classes = utils.createStyles('Footer', {
    container: {
      width: 1024,
      margin: '0 auto',
      marginTop: 48,
    },
    greenSection: {
      background: '#00ad96',
      height: 50,
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 29px 0 66px',
      color: 'white',
    },
    text: {
      color: '#00ad96',
      fontSize: 10,
    },
    links: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 21,
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
    },
    right: {
      fontSize: 13,
    },
    info: {
      fontSize: 14,
      marginRight: 31,
    },
    contactIcon: {
      cursor: 'pointer',
      marginRight: 5,
    }
});

class Footer extends Component {
  render() {
    return (
      <div className={classes.container}>
        <span className={classes.text}>במקרים מסויימים תיתכן בקשה להגעה למכס, תקבלו הודעה על כך 4 שעות לפני הטיסה**</span>
        <span className={classes.text}>מוגבל למבקשי החזר באפליקציה בספטמבר-אוקטובר 2018 קוד קופון בלגיה2018 למימוש ההטבה עם שובכם לישראל*</span>
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
             כל הזכויות שמורות. Refundit 2018 ©
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
