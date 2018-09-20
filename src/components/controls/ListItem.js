import React, { Component } from 'react';
import * as utils from '../../common/utils';

const classes = utils.createStyles('ListItem', {
    container: {
      marginBottom: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      width: 160,
      textAlign: 'right',
      fontSize: 15,
    }
});

class ListItem extends Component {
  render() {
    const {icon, text} = this.props;
    return (
      <div className={classes.container}>
        <span className={classes.text}>{text}</span>
        <img src={icon}/>
      </div>
    );
  }
}

export default ListItem;
