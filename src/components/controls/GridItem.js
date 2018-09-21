import React, { Component } from 'react';
import * as utils from '../../common/utils';

const classes = utils.createStyles('GridItem', {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 250,
      marginLeft: 97,
      marginRight: 71,
    },
    text: {
      fontSize: 29,
      color: '#00ad96',
      marginTop: 15,
    },
    clickable: {
      cursor: 'pointer'
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
        <img src={icon} className={iconClassName}/>
        <span className={textClassName ? textClassName : classes.text} dangerouslySetInnerHTML={{__html: textHtml}}></span>
      </div>
    );
  }
}

export default GridItem;
