import React, { Component } from 'react';
import * as utils from '../../common/utils';
import GridItem from '../controls/GridItem';

import CameraIcon from '../../assets/images/camera_icon.png';
import ThumbsUpIcon from '../../assets/images/thumbs_up_icon.png';
import PaperPlaneIcon from '../../assets/images/paper_plane_icon.png';

const classes = utils.createStyles('RefundStep', {
    container: {
      marginTop: 18,
      marginBottom: 44,
      fontFamily: 'Rubik Medium',
    },
    stepTitle: {
      fontSize: 25,
      color: '#00ad96',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      overflow: 'hidden',
      width: 1024,
      margin: '0 auto',
    },
    buttonRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 38,
      position: 'relative',
    },
    dotLine: {
      left: 330,
      top: 44,
      width: 690,
      borderTop: '2px dashed #00ad96',
      position: 'absolute',
      zIndex: -1,
    }
});

class RefundStep extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.row}>
          <span className={classes.stepTitle}>קבלו החזר בשלושה צעדים פשוטים</span>
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
