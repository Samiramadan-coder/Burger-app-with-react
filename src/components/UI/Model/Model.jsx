import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from "./Model.module.scss";

class Model extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const {children, show, modalClosed} = this.props;
    return (
      <>
        <Backdrop show={show} clicked={modalClosed} />
        <div 
          className={classes.Modal} 
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}>
          {children}
        </div>
      </>
    )
  }
};

export default Model;