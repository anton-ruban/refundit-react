import React, { Component } from 'react';
import * as utils from '../../common/utils';
import FrontBackground from '../../assets/images/front-bg.png';
import DownloadBackground from '../../assets/images/btn_download.png';
import DownloadMark from '../../assets/images/price_mark.png';
import RightTopIcon from '../../assets/images/right-top-icon.png';
import Logo from '../../assets/images/refundit-loto.png';

const classes = utils.createStyles('Front', {
    container: {
      backgroundPosition: 'center',
      position: 'relative',
      width: 1024,
      margin: '0 auto',
    },
    center: {
      position: 'absolute',
      top: '43.6%',
      left: 160,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      width: 670,
      fontSize: 35,
      fontFamily: 'Rubik Regular'
    },
    downloadBtn: {
      background: `url(${DownloadBackground}) no-repeat`,
      width: 245,
      height: 39,
      lineHeight: '39px',
      color: 'white',
      marginTop: 24,
      fontSize: 17,
      cursor: 'pointer',
      position: 'relative',
    },
    downloadBtnIcon: {
      top: -19,
      left: -10,
      position: 'absolute',
      color: 'white'
    },
    firstText: {
      color: 'white',
      marginTop: 5,
      fontSize: 11,
    },
    text: {
      color: 'white',
      fontSize: 11,
    },
    strongText: {
      fontFamily: 'Rubik Bold',
      fontSize: 16,
    },
    rightTopIcon: {
      top: 8,
      right: 21,
      position: 'absolute',
    },
    logoIcon: {
      top: 34,
      left: 43,
      position: 'absolute',
    },
    bgImage: {
      width: '100%',
      backgroundSize: 'cover',
    }
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
          <span className={classes.title}>קחו את הזמן לשופינג בבלגיה! וקבלו החזר מע״מ באפליקציה בקלות ומכ</span>
          <div className={classes.downloadBtn} onClick={this.handleDownloadClick}>&lt;&lt; להורדת האפליקציה
            <img className={classes.downloadBtnIcon} src={DownloadMark}/>
          </div>
          <span className={classes.firstText}>בקשו החזר מע״מ באפליקציה </span>
          <span className={classes.text}> וקבלו <span className={classes.strongText}>50 יורו מתנה</span> לביזבוזים</span>
        </div>
        <img src={RightTopIcon} className={classes.rightTopIcon}/>
        <img src={Logo} className={classes.logoIcon}/>
      </div>
    );
  }
}

export default Front;
