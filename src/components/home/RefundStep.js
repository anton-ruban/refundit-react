import React, { Component } from 'react';
import * as utils from '../../common/utils';
import GridItem from '../controls/GridItem';

import CameraIcon from '../../assets/images/camera_icon.png';
import ThumbsUpIcon from '../../assets/images/thumbs_up_icon.png';
import PaperPlaneIcon from '../../assets/images/paper_plane_icon.png';

const classes = utils.createStyles('RefundStep', {
    container: {
      marginTop: 43,
      marginBottom: 100,
      fontFamily: 'Rubik Medium',
    },
    stepTitle: {
      fontSize: 48,
      color: '#00ad96',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      maxWidth: 1920,
      margin: '0 auto',
    },
    buttonRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 69,
      position: 'relative',
    },
    dotLine: {
      left: 256,
      top: 80,
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
            <GridItem icon={ThumbsUpIcon} text='**קבלו אישור  והכסף בדרך אליכם'/>
            <GridItem icon={PaperPlaneIcon} text='צרפו את הדרכון ואת כרטיס העליה למטוס'/>
            <GridItem icon={CameraIcon} text='צלמו את החשבונית בחנות'/>
          </div>
        </div>
      </div>
    );
  }
}

export default RefundStep;
