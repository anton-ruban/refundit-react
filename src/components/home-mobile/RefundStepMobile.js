import React, { Component } from 'react';
import * as utils from '../../common/utils';

import DownloadMark from '../../assets/images/price_mark.png';
import CameraIcon from '../../assets/images/camera_icon.png';
import ThumbsUpIcon from '../../assets/images/thumbs_up_icon.png';
import PaperPlaneIcon from '../../assets/images/paper_plane_icon.png';

const classes = utils.createStyles('RefundStepMobile', {
    container: {
      margin: '0 auto',
      paddingTop: '6%',
      marginBottom: '2.2%',
      minWidth: 320,
      overflow: 'hidden',
    },
    stepTitle: {
      fontSize: '2.2em',
      color: '#00ad96',
      border: '4px dashed #00ad96',
      padding: '3.5% 2%'
    },
    steps: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
    },
    dotLine: {
      left: '50%',
      top: '4%',
      transform: 'translate(-50%)',
      borderLeft: '4px dashed #00ad96',
      height: '95%',
      position: 'absolute',
      zIndex: -1,
    },
    stepIcon: {
      width: '25%',
      marginTop: '18.5%'
    },
    stepFirstText: {
      fontSize: '2em',
      color: '#00ad96',
      position: 'absolute',
      left: '64%',
      top: '18%',
      textAlign: 'right',
      lineHeight: '1em',
    },
    stepSecondText: {
      fontSize: '2em',
      color: '#00ad96',
      position: 'absolute',
      left: '4%',
      top: '49%',
      textAlign: 'right',
      lineHeight: '1em',
    },
    stepThirdText: {
      fontSize: '2em',
      color: '#00ad96',
      position: 'absolute',
      left: '66%',
      top: '87%',
      textAlign: 'right',
      lineHeight: '1em',
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
      display: 'flex',
      marginTop: '13%',
      alignItems: 'center',
      flexDirection: 'column',
      background: '#00ad96',
      color: 'white',
      cursor: 'pointer',
      padding: '4.5% 0',
      position: 'relative',
    },
    downloadBtnIcon: {
      top: '-46%',
      left: '1.7%',
      position: 'absolute',
      width: '18.5%',
      color: 'white'
    },
    footerText: {
      fontSize: '0.95em',
      color: '#00ad96',
      textAlign: 'right',
      marginTop: '7.5%',
      lineHeight: '1.5em',
      marginRight: '3%',
    }
});

class RefundStepMobile extends Component {
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
        <span className={classes.stepTitle}>קבלו החזר בשלושה צעדים פשוטים</span>
        <div className={classes.steps}>
          <div className={classes.dotLine}></div>
          <img className={classes.stepIcon} src={CameraIcon}/>
          <img className={classes.stepIcon} src={PaperPlaneIcon}/>
          <img className={classes.stepIcon} src={ThumbsUpIcon}/>
          <span className={classes.stepFirstText}>צלמו את<br/>החשבונית<br/>בחנות</span>
          <span className={classes.stepSecondText}>צרפו את<br/>הדרכון ואת<br/>כרטיס העליה<br/>למטוס</span>
          <span className={classes.stepThirdText}>קבלו אישור<br/>והכסף בדרך<br/>**אליכם</span>
        </div>
        <div className={classes.footerText}>
          מוגבל למבקשי החזר באפליקציה בספטמבר-אוקטובר 2018*
          <br/>
          קוד קופון בלגיה2018 למימוש ההטבה עם שובכם לישראל
          <br/>
          במקרים מסויימים תיתכן בקשה להגעה למכס, תקבלו הודעה על כך 4 שעות לפני הטיסה**
        </div>
        <div className={classes.downloadBtn} onClick={this.handleDownloadClick}>
          <span className={classes.downloadBoldText}>להורדת האפליקציה</span>
          <span className={classes.downloadText}>*בקשו החזר מע״מ באפליקציה וקבלו 50 יורו מתנה לביזבוזים</span>
          <img className={classes.downloadBtnIcon} src={DownloadMark}/>
        </div>
      </div>
    );
  }
}

export default RefundStepMobile;
