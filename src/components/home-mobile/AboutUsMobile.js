import React, { Component } from 'react';
import GridItem from '../controls/GridItem';

import * as utils from '../../common/utils';
import GeekTime from '../../assets/images/geektime.png';
import Globes from '../../assets/images/globes.png';
import TheMarker from '../../assets/images/themarker.png';
import PlaneIcon from '../../assets/images/paper_plane.png';


const classes = utils.createStyles('AboutUsMobile', {
    container: {
      position: 'relative',
      marginTop: '7%',
      marginBottom: '28%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      minWidth: 320,
    },
    text: {
      color: '#00ad96',
      fontSize: '2em',
      marginBottom: '11%',
    },
    GridItemClassName: {
      width: '100%',
      margin: 0,
      marginTop: '9%',
    },
    GridItemIconClass: {
      width: '38%',
      objectFit: 'cover',
    },
    GridItemTextClass: {
      fontSize: '1.3em',
      fontFamily: 'Rubik Regular',
      color: '#424242',
      marginTop: 10,
    },
    planeIcon: {
      marginLeft: 8,
    }
});

class AboutUsMobile extends Component {
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
        <GridItem
          icon={GeekTime}
          textHtml='״הסטארטאפ החדש של אורי לוין<br/>מביא בשורה לתחום החזרי המע׳׳מ בשדה התעופה״'
          className={classes.GridItemClassName}
          iconClassName={classes.GridItemIconClass}
          onClickItem={() => this.handleItemClick('geektime')}
          textClassName={classes.GridItemTextClass}/>
        <GridItem
          icon={TheMarker} textHtml='?״טסים לבלגיה החודש<br/>אפליקציית החזרי מס מציעה 50 יורו לבזבוזים״'
          className={classes.GridItemClassName}
          iconClassName={classes.GridItemIconClass}
          onClickItem={() => this.handleItemClick('themarker')}
          textClassName={classes.GridItemTextClass}/>
        <GridItem
          icon={Globes} textHtml='״בלי תור ודרך הנייד: מיזם חדש<br/> מפשט את החזר המע"מ לתיירים״'
          className={classes.GridItemClassName}
          iconClassName={classes.GridItemIconClass}
          onClickItem={() => this.handleItemClick('globes')}
          textClassName={classes.GridItemTextClass}/>
      </div>
    );
  }
}

export default AboutUsMobile;
