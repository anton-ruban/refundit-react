import React, { Component } from 'react';
import * as utils from '../../common/utils';
import DownloadMark from '../../assets/images/price_mark.png';
import FrontBackground from '../../assets/images/front-bg-mobile.png';
import Logo from '../../assets/images/refundit-loto.png';
import DownArrow from '../../assets/images/down_arrow.png';

const classes = utils.createStyles('FrontMobile', {
    container: {
      width: '100%',
      position: 'relative',
      minWidth: 320
    },
    center: {
      position: 'absolute',
      top: '6%',
      left: '50%',
      width: '100%',
      transform: 'translate(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logoIcon: {
      width: '46%',
    },
    title: {
      color: 'white',
      marginTop: '6%',
      fontSize: '2.45em',
      lineHeight: '1.3em',
      fontFamily: 'Rubik Regular'
    },
    bottomText: {
      position: 'absolute',
      bottom: '21.5%',
      left: '50%',
      color: 'white',
      fontSize: '1.5em',
      transform: 'translate(-50%)'
    },
    downloadBoldText: {
      fontSize: '2.3em',
      color: 'white',
      fontFamily: 'Rubik Bold',
    },
    downloadText: {
      fontSize: '1.4em',
      color: 'white',
      fontFamily: 'Rubik Regular',
    },
    downloadBtn: {
      width: '100%',
      height: '11.6%',
      bottom: '1%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: '#00ad96',
      color: 'white',
      cursor: 'pointer',
      position: 'absolute',
    },
    downloadBtnIcon: {
      top: '-46%',
      left: '1.7%',
      position: 'absolute',
      width: '18.5%',
      color: 'white'
    },
    bgImage: {
      width: '100%',
      backgroundSize: 'cover',
    },
    arrowButton: {
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%)',
      bottom: '15%',
      width: '10%'
    },
});

class FrontMobile extends Component {
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
          <img src={Logo} className={classes.logoIcon}/>
          <span className={classes.title}>!קחו את הזמן לשופינג בבלגיה<br/>וקבלו החזר מע״מ<br/>באפליקציה בקלות ומכל חנות</span>
        </div>
        <span className={classes.bottomText}>אז איך<br/>?עושים את זה</span>
        <a><img className={classes.arrowButton} src={DownArrow}/></a>
        <div className={classes.downloadBtn} onClick={this.handleDownloadClick}>
          <span className={classes.downloadBoldText}>להורדת האפליקציה</span>
          <span className={classes.downloadText}>*בקשו החזר מע״מ באפליקציה וקבלו 50 יורו מתנה לביזבוזים</span>
          <img className={classes.downloadBtnIcon} src={DownloadMark}/>
        </div>
      </div>
    );
  }
}

export default FrontMobile;
