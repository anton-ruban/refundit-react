import React, { Component } from 'react';
import GridItem from '../controls/GridItem';

import * as utils from '../../common/utils';
import PhoneIcon from '../../assets/images/contact_phone.png';
import FacebookIcon from '../../assets/images/facebook_icon.png';
import LinkedinIcon from '../../assets/images/linkedin_icon.png';


const classes = utils.createStyles('ContactInfoMobile', {
    container: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      bottom: '1.15%',
      width: '50%',
      left: '-5%',
      minWidth: 160,
    },
    section1: {
      background: '#00ad96',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      transform: 'translate(-54%)',
      padding: 5,
      borderRadius: 48,
      marginBottom: 10,
    },
    section: {
      background: '#00ad96',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 5,
      borderRadius: 48,
      marginBottom: 10,
    },
    phoneText: {
      fontSize: '1.5em',
      color: 'white',
      lineHeight: '1.6em',
      marginRight: '5%',
    },
    contactIcon: {
      width: 90,
    },
    link: {
      fontSize: 0,
    },
    '@media (max-width: 700px)': {
      contactIcon: {
        width: 80,
      }
    },
    '@media (max-width: 600px)': {
      contactIcon: {
        width: 70,
      }
    },
    '@media (max-width: 500px)': {
      contactIcon: {
        width: 60,
      }
    },
    '@media (max-width: 400px)': {
      contactIcon: {
        width: 45,
      }
    }
});

class ContactInfoMobile extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.section1}>
          <a className={classes.link} href='https://www.linkedin.com/company/refundit-ltd' target='_blank'>
            <img src={LinkedinIcon} className={classes.contactIcon}/>
          </a>
        </div>
        <div className={classes.section1}>
          <a className={classes.link} href='https://www.facebook.com/RefunditIsrael' target='_blank'>
            <img src={FacebookIcon} className={classes.contactIcon}/>
          </a>
        </div>
        <div className={classes.section}>
          <span className={classes.phoneText}>054-7171971</span>
          <a className={classes.link}>
            <img src={PhoneIcon} className={classes.contactIcon}/>
          </a>
        </div>
        {/*<GridItem
          icon={GeekTime}
          textHtml='״הסטארטאפ החדש של אורי לוין<br/>מביא בשורה לתחום החזרי המע׳׳מ בשדה התעופה״'
          className={classes.GridItemClassName}
          iconClassName={classes.GridItemIconClass}
          onClickItem={() => this.handleItemClick('geektime')}
          textClassName={classes.GridItemTextClass}/>
        <GridItem
          icon={TheMarker} textHtml='?״טסים לבלגיה החודש<br/>אפליקציית החזרי מס מציעה 50 יורו לבזבוזים״'
          className={classes.GridItemClassName}
          iconClassName={classes.GridItemIconClass}
          onClickItem={() => this.handleItemClick('themarker')}
          textClassName={classes.GridItemTextClass}/>
        <GridItem
          icon={Globes} textHtml='״בלי תור ודרך הנייד: מיזם חדש<br/> מפשט את החזר המע"מ לתיירים״'
          className={classes.GridItemClassName}
          iconClassName={classes.GridItemIconClass}
          onClickItem={() => this.handleItemClick('globes')}
          textClassName={classes.GridItemTextClass}/>*/}
      </div>
    );
  }
}

export default ContactInfoMobile;
