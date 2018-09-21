import React, { Component } from 'react';
import * as utils from '../../common/utils';
import DescribeBg from '../../assets/images/middle-bg.png';
import Clock1 from '../../assets/images/clock-1.png';
import Clock2 from '../../assets/images/clock-2.png';
import Clock3 from '../../assets/images/clock-3.png';
import Clock4 from '../../assets/images/clock-4.png';
import Clock5 from '../../assets/images/clock-5.png';
import ListItem from '../controls/ListItem';

const classes = utils.createStyles('Describe', {
    container: {
      position: 'relative',
      backgroundPosition: 'center',
      color: 'white',
      maxWidth: 1920,
      minWidth: 1024,
    },
    bgImage: {
      width: '100%',
      backgroundSize: 'cover',
    },
    listTitle: {
      fontSize: '2.3em',
      textAlign: 'right',
      marginBottom: '22%',
    },
    rightListTitle: {
      fontSize: '2.3em',
      textAlign: 'right',
    },
    leftList: {
      position: 'absolute',
      left: '4%',
      top: '20%',
      display: 'flex',
      flexDirection: 'column',
      width: '21%',
    },
    rightList: {
      position: 'absolute',
      textAlign: 'right',
      left: 'calc(50% + 20px)',
      top: '20%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    rightlistView: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'right',
      marginTop: '21%',
    },
    textList: {
      width: '120%',
    },
});

class Describe extends Component {
  render() {
    return (
      <div className={classes.container}>
        <img src={DescribeBg} className={classes.bgImage}/>
        <div className={classes.leftList}>
          <span className={classes.listTitle}>Refundit בלי ־</span>
          <div className={classes.list}>
            <ListItem icon={Clock5} textHtml='ממלאים טפסים מתישים'/>
            <ListItem icon={Clock4} textHtml='עומדים בתור<br/>בלתי נגמר במכס'/>
            <ListItem icon={Clock3} textHtml='מקבלים החזר רק במספר<br/>מוגבל של חנויות'/>
            <ListItem icon={Clock2} textHtml='משלמים עמלה מנופחת<br/>של  60% - 30%'/>
          </div>
        </div>
        <div className={classes.rightList}>
          <div className={classes.textList}>
            <span className={classes.rightListTitle}>Refundit עם ־</span>
            <div className={classes.rightlistView}>
              <ListItem icon={Clock5} textHtml='משלימים את התהליך<br/>במהירות וללא טפסים'/>
              <ListItem icon={Clock1} textHtml='מקבלים החזר על קניות<br/>בכל החנויות'/>
              <ListItem icon={Clock4} textHtml='משלמים רק 9% עמלה'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Describe;
