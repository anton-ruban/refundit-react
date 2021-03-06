import React, { Component } from 'react';
import * as utils from '../../common/utils';

const classes = utils.createStyles('ListItem', {
    container: {
      marginBottom: 33,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      textAlign: 'right',
      fontSize: '1.45em',
      width: '83%',
    },
    icon: {
      width: '10%',
    }
});

class ListItem extends Component {
  render() {
    const {icon, textHtml} = this.props;
    return (
      <div className={classes.container}>
        <span className={classes.text} dangerouslySetInnerHTML={{__html: textHtml}}></span>
        <img className={classes.icon} src={icon}/>
      </div>
    );
  }
}

export default ListItem;
