import React, { Component } from 'react';
import * as utils from '../../common/utils';
import FrontBackground from '../../assets/images/front-bg.png';
import DownloadBackground from '../../assets/images/btn_download.png';
import DownloadMark from '../../assets/images/price_mark.png';
import RightTopIcon from '../../assets/images/right-top-icon.png';
import Logo from '../../assets/images/refundit-loto.png';

const classes = utils.createStyles('Front', {
    container: {
      background: `url(${FrontBackground}) no-repeat`,
      backgroundPosition: 'center',
      position: 'relative',
      height: 1240,
    },
    center: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontSize: 63,
      fontFamily: 'Rubik Regular'
    },
    downloadBtn: {
      background: `url(${DownloadBackground}) no-repeat`,
      width: 457,
      height: 70,
      lineHeight: '70px',
      color: 'white',
      marginTop: 50,
      fontSize: 31,
      position: 'relative',
    },
    downloadBtnIcon: {
      top: -30,
      left: -20,
      position: 'absolute',
      color: 'white'
    },
    firstText: {
      color: 'white',
      marginTop: 10,
      fontSize: 20,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    strongText: {
      fontSize: 30,
    },
    rightTopIcon: {
      top: 0,
      right: 0,
      position: 'absolute',
    },
    logoIcon: {
      top: 70,
      left: 80,
      position: 'absolute',
    },
});

class Front extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.center}>
          <span className={classes.title}>קחו את הזמן לשופינג בבלגיה! וקבלו החזר מע״מ באפליקציה בקלות ומכ</span>
          <div className={classes.downloadBtn}>להורדת האפליקציה
            <img className={classes.downloadBtnIcon} src={DownloadMark}/>
          </div>
          <span className={classes.firstText}>בקשו החזר מע״מ באפליקציה </span>
          <span className={classes.text}> וקבלו <strong className={classes.strongText}>50 יורו מתנה</strong> לביזבוזים</span>
        </div>
        <img src={RightTopIcon} className={classes.rightTopIcon}/>
        <img src={Logo} className={classes.logoIcon}/>
      </div>
    );
  }
}

export default Front;
