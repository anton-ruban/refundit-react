import React, { Component } from 'react';
import * as utils from '../../common/utils';
import DescribeBg from '../../assets/images/middle-bg-mobile.png';
import Clock1 from '../../assets/images/clock-1.png';
import Clock2 from '../../assets/images/clock-2.png';
import Clock3 from '../../assets/images/clock-3.png';
import Clock4 from '../../assets/images/clock-4.png';
import Clock5 from '../../assets/images/clock-5.png';
import GridItem from '../controls/GridItem';

const classes = utils.createStyles('DescribeMobile', {
    container: {
      position: 'relative',
      backgroundPosition: 'center',
      color: 'white',
      margin: '0 auto',
      minWidth: 320,
    },
    title: {
      fontSize: '2.95em',
      marginTop: '15%',
    },
    bgImage: {
      width: '100%',
      backgroundSize: 'cover',
    },
    body: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      left: '50%',
      width: '100%',
      top: 0,
      transform: 'translate(-50%)',
    },
    gridItemClassName: {
      width: '100%',
      marginTop: '9%',
    },
    gridItemIconClass2: {
      width: '7%',
    },
    gridItemIconClass: {
      width: '9%',
    },
    gridItemTextClass: {
      fontSize: '1.95em',
    },
    secondTitle: {
      fontSize: '2.95em',
      marginTop: '42%',
    }
});

class DescribeMobile extends Component {
  render() {
    return (
      <div className={classes.container}>
        <img src={DescribeBg} className={classes.bgImage}/>
        <div className={classes.body}>
          <span className={classes.title}>Refundit עם</span>
          <GridItem
            icon={Clock5} textHtml='משלימים את<br/><b>במהירות<b/> התהליך'
            className={classes.gridItemClassName}
            iconClassName={classes.gridItemIconClass}
            textClassName={classes.gridItemTextClass}/>
          <GridItem
            icon={Clock1} textHtml='מקבלים החזר על<br/><b>בכל החנויות</b> קניות'
            className={classes.gridItemClassName}
            iconClassName={classes.gridItemIconClass}
            textClassName={classes.gridItemTextClass}/>
          <GridItem
            icon={Clock4} textHtml='עמלה <b>9%</b> משלמים רק'
            className={classes.gridItemClassName}
            iconClassName={classes.gridItemIconClass}
            textClassName={classes.gridItemTextClass}/>
          <span className={classes.secondTitle}>Refundit בלי</span>
          <GridItem
            icon={Clock5} textHtml='ממלאים טפסים מתישים'
            className={classes.gridItemClassName}
            iconClassName={classes.gridItemIconClass2}
            textClassName={classes.gridItemTextClass}/>
          <GridItem
            icon={Clock4} textHtml='עומדים בתור<br/>בלתי נגמר במכס'
            className={classes.gridItemClassName}
            iconClassName={classes.gridItemIconClass2}
            textClassName={classes.gridItemTextClass}/>
          <GridItem
            icon={Clock3} textHtml='משלמים עמלה מנופחת<br/>30% - 60% של'
            className={classes.gridItemClassName}
            iconClassName={classes.gridItemIconClass2}
            textClassName={classes.gridItemTextClass}/>
          <GridItem
            icon={Clock2} textHtml='מקבלים החזר רק במספר<br/>מוגבל של חנויות'
            className={classes.gridItemClassName}
            iconClassName={classes.gridItemIconClass2}
            textClassName={classes.gridItemTextClass}/>
        </div>
      </div>
    );
  }
}

export default DescribeMobile;
