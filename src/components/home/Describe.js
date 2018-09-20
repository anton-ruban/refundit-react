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
      width: 1024,
      margin: '0 auto',
    },
    bgImage: {
      width: '100%',
      backgroundSize: 'cover',
    },
    listTitle: {
      fontSize: 25,
      textAlign: 'right',
      marginBottom: 45,
    },
    rightListTitle: {
      fontSize: 25,
      textAlign: 'right',
    },
    leftList: {
      position: 'absolute',
      left: 69,
      top: 132,
      display: 'flex',
      flexDirection: 'column',
      width: 190,
    },
    rightList: {
      position: 'absolute',
      textAlign: 'right',
      left: 'calc(50% + 7px)',
      top: 132,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    rightlistView: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'right',
      marginTop: 37,
    },
    textList: {
      width: 196,
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
            <ListItem icon={Clock5} text='ממלאים טפסים מתישים'/>
            <ListItem icon={Clock4} text='עומדים בתור בלתי נגמר במכס'/>
            <ListItem icon={Clock3} text='מקבלים החזר רק במספר מוגבל של חנויות '/>
            <ListItem icon={Clock2} text='משלמים עמלה מנופחת של  60% - 30%'/>
          </div>
        </div>
        <div className={classes.rightList}>
          <div className={classes.textList}>
            <span className={classes.rightListTitle}>Refundit עם ־</span>
            <div className={classes.rightlistView}>
              <ListItem icon={Clock5} text='משלימים את התהליך במהירות וללא טפסים'/>
              <ListItem icon={Clock1} text='מקבלים החזר על קניות בכל החנויות'/>
              <ListItem icon={Clock4} text='משלמים רק 9% עמלה'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Describe;
