import React, { Component } from 'react';
import * as utils from '../../common/utils';
import FrontBackground from '../../assets/images/front-bg.png';
import DownloadMark from '../../assets/images/price_mark.png';
import RightTopIcon from '../../assets/images/right-top-icon.png';
import Logo from '../../assets/images/refundit-loto.png';

const classes = utils.createStyles('Front', {
    container: {
      backgroundPosition: 'center',
      position: 'relative',
      width: '100%',
      margin: '0 auto',
      maxWidth: 1920,
      minWidth: 1024,
    },
    center: {
      position: 'absolute',
      top: '43.5%',
      left: '50%',
      width: '100%',
      height: '100%',
      transform: 'translate(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontSize: '3.25em',
      fontFamily: 'Rubik Regular'
    },
    downloadBtn: {
      border: '2px solid white',
      width: '23%',
      height: '5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      background: '#00ad96',
      color: 'white',
      marginTop: '3%',
      fontSize: '1.55em',
      cursor: 'pointer',
      position: 'relative',
    },
    downloadBtnIcon: {
      top: '-71%',
      left: '-7%',
      position: 'absolute',
      width: '19%',
      color: 'white'
    },
    firstText: {
      color: 'white',
      marginTop: 10,
      fontSize: '1em',
    },
    text: {
      color: 'white',
      fontSize: '1em',
    },
    strongText: {
      fontFamily: 'Rubik Bold',
      fontSize: '1.55em',
    },
    rightTopIcon: {
      top: '1.13%',
      right: '1.9%',
      width: '12%',
      position: 'absolute',
    },
    logoIcon: {
      top: '5%',
      left: '4%',
      width: '14.5%',
      position: 'absolute',
    },
    bgImage: {
      width: '100%',
      backgroundSize: 'cover',
    },
    bottomText: {
      color: 'white',
      fontSize: '1.35em',
      marginTop: '7%',
    },
    bottomRightText: {
      color: 'white',
      fontSize: '1em',
      position: 'absolute',
      textAlign: 'right',
      right: '5%',
      bottom: '5%'
    },
});

class Front extends Component {
  handleDownloadClick = () => {
    if (
      window.navigator.platform === 'iPhone' ||
      window.navigator.platform === 'iPod' ||
      window.navigator.platform === 'iPad' ||
      window.navigator.platform === 'iPhone Simulator' ||
      window.navigator.platform === 'iPod Simulator' ||
      window.navigator.platform === 'iPad Simulator' ||
      window.navigator.platform === 'Macintosh' ||
      window.navigator.platform === 'MacIntel' ||
      window.navigator.platform === 'MacPPC' ||
      window.navigator.platform === 'Mac68K' ||
      window.navigator.platform === 'Pike v7.6 release 92' ||
      window.navigator.platform === 'Pike v7.8 release 517') {

      window.open('https://itunes.apple.com/il/app/refundit/id1373203298?mt=8', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.refundit', '_blank');
    }
  }
  render() {
    return (
      <div className={classes.container}>
        <img src={FrontBackground} className={classes.bgImage}/>
        <div className={classes.center}>
          <span className={classes.title}>!קחו את הזמן לשופינג בבלגיה<br/>וקבלו החזר מע״מ באפליקציה בקלות ומכל חנות</span>
          <div className={classes.downloadBtn} onClick={this.handleDownloadClick}>&lt;&lt; להורדת האפליקציה
            <img className={classes.downloadBtnIcon} src={DownloadMark}/>
          </div>
          <span className={classes.firstText}>בקשו החזר מע״מ באפליקציה </span>
          <span className={classes.text}> וקבלו <span className={classes.strongText}>50 יורו מתנה</span> לביזבוזים</span>
          <span className={classes.bottomText}>אז איך<br/>?עושים את זה</span>
        </div>
        <img src={RightTopIcon} className={classes.rightTopIcon}/>
        <img src={Logo} className={classes.logoIcon}/>
        <span className={classes.bottomRightText}>,ליוצאים מאירופה דרך שדה התעופה בבריסל<br/>על קניות בבלגיה בלבד</span>
      </div>
    );
  }
}

export default Front;
