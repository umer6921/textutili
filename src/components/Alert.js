import React from 'react';
import PropTypes from 'prop-types';
import './stylesheet.css';

export default function Alert(props) {
    // const { alertText } = props;

    // if (!alertText) {
    //   return null; // Render nothing if alertText is null
    // }
    return (


        props.alertText &&

        <>

            <div className={`alert alert-${props.alertText.type} alert-dismissible show`} role="alert">
                <strong> {props.alertText.text} </strong>
              
               
            </div>

        </>

    )
}

Alert.propTypes = {
    alertText: PropTypes.string
}



