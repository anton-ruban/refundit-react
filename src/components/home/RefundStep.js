import React, { Component } from 'react';
import * as utils from '../../common/utils';
import GridItem from '../controls/GridItem';

import CameraIcon from '../../assets/images/camera_icon.png';
import ThumbsUpIcon from '../../assets/images/thumbs_up_icon.png';
import PaperPlaneIcon from '../../assets/images/paper_plane_icon.png';

const classes = utils.createStyles('RefundStep', {
    container: {
      margin: '0 auto',
      marginTop: '2%',
      marginBottom: '4.2%',
      fontFamily: 'Rubik Medium',
      maxWidth: 1920,
      minWidth: 1024,
    },
    stepTitle: {
      fontSize: '2.4em',
      color: '#00ad96',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      margin: '0 auto',
    },
    buttonRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '3.6%',
      position: 'relative',
      width: '100%',
    },
    dotLine: {
      left: '32.5%',
      top: '35%',
      borderTop: '5px dashed #00ad96',
      width: 'calc(100% + 50%)',
      position: 'absolute',
      zIndex: -1,
    }
});

class RefundStep extends Component {
  render() {
    return (
      <div className={classes.container}>
        <span className={classes.stepTitle}>קבלו החזר בשלושה צעדים פשוטים</span>
        <div className={classes.row}>
          <div className={classes.buttonRow}>
            <div className={classes.dotLine}></div>
            <GridItem icon={ThumbsUpIcon} textHtml='קבלו אישור**<br/>והכסף בדרך אליכם'/>
            <GridItem icon={PaperPlaneIcon} textHtml='צרפו את הדרכון ואת<br/>כרטיס העליה למטוס'/>
            <GridItem icon={CameraIcon} textHtml='צלמו את<br/>החשבונית בחנות'/>
          </div>
        </div>
      </div>
    );
  }
}

export default RefundStep;
