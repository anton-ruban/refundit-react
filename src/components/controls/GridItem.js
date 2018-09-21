import React, { Component } from 'react';
import * as utils from '../../common/utils';

const classes = utils.createStyles('GridItem', {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '13%',
      margin: '0 4%',
    },
    text: {
      fontSize: '1.45em',
      color: '#00ad96',
      marginTop: '7%',
      width: 246,
    },
    clickable: {
      cursor: 'pointer'
    },
    icon: {
      width: '57%',
    }
});

class GridItem extends Component {
  handleItemClick = () => {
    this.props.onClickItem && this.props.onClickItem();
  }
  render() {
    const {icon, textHtml, iconClassName, textClassName, className, onClickItem} = this.props;
    return (
      <div className={utils.classes(classes.container, className, onClickItem ? classes.clickable : '')} onClick={this.handleItemClick}>
        <img src={icon} className={iconClassName ? iconClassName : classes.icon}/>
        <span className={textClassName ? textClassName : classes.text} dangerouslySetInnerHTML={{__html: textHtml}}></span>
      </div>
    );
  }
}

export default GridItem;
