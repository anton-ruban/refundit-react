import React, { Component } from 'react';
import GridItem from '../controls/GridItem';

import * as utils from '../../common/utils';
import GeekTime from '../../assets/images/geektime.png';
import Globes from '../../assets/images/globes.png';
import TheMarker from '../../assets/images/themarker.png';
import PlaneIcon from '../../assets/images/paper_plane.png';


const classes = utils.createStyles('AboutUs', {
    container: {
      position: 'relative',
      padding: '36px 0 110px',
    },
    flexRow: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 1920,
      margin: 'auto',
      marginTop: 15
    },
    dotLine: {
      flex: 1,
      borderTop: '1px dashed #00ad96',
    },
    text: {
      position: 'absolute',
      color: '#00ad96',
      right: 'calc(50% - 594px)',
      fontSize: 28,
      top: 40,
    },
    centerRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -13,
    },
    GridItemClassName: {
      width: 346,
      display: 'flex',
      alignItems: 'center',
      marginLeft: 64,
      marginRight: 105,
      flexDirection: 'column',
    },
    GridItemIconClass: {
      height: 85,
      objectFit: 'none',
      marginBottom: 5,
    },
    GridItemTextClass: {
      fontSize: 23,
      fontFamily: 'Rubik Regular',
      color: '#424242',
    },
    planeIcon: {
      marginLeft: 8,
    }
});

class AboutUs extends Component {
  handleItemClick = (type) => {
    if (type === 'globes') {
      window.open('https://www.globes.co.il/news/article.aspx?did=1001241848', '_blank');
    } else if(type === 'themarker') {
      window.open('https://www.themarker.com/consumer/tourism/1.6337065', '_blank');
    } else {
      window.open('https://www.geektime.co.il/refundit-startup/', '_blank');
    }
  }
  render() {
    return (
      <div className={classes.container}>
        <span className={classes.text}>:כתבו עלינו</span>
        <div className={classes.flexRow}>
          <img src={PlaneIcon} className={classes.planeIcon}/>
          <div className={classes.dotLine}></div>
        </div>
        <div className={classes.centerRow}>
          <GridItem
            icon={Globes} textHtml='״בלי תור ודרך הנייד: מיזם חדש<br/> מפשט את החזר המע"מ לתיירים״'
            className={classes.GridItemClassName}
            iconClassName={classes.GridItemIconClass}
            onClickItem={() => this.handleItemClick('globes')}
            textClassName={classes.GridItemTextClass}/>
          <GridItem
            icon={TheMarker} textHtml='?״טסים לבלגיה החודש<br/>אפליקציית החזרי מס מציעה 50 יורו לבזבוזים״'
            className={classes.GridItemClassName}
            iconClassName={classes.GridItemIconClass}
            onClickItem={() => this.handleItemClick('themarker')}
            textClassName={classes.GridItemTextClass}/>
          <GridItem
            icon={GeekTime}
            textHtml='״הסטארטאפ החדש של אורי לוין<br/>מביא בשורה לתחום החזרי המע׳׳מ בשדה התעופה״'
            className={classes.GridItemClassName}
            iconClassName={classes.GridItemIconClass}
            onClickItem={() => this.handleItemClick('geektime')}
            textClassName={classes.GridItemTextClass}/>
        </div>
      </div>
    );
  }
}

export default AboutUs;
