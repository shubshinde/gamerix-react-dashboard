
import React from "react";

let Button = (props) => {
    
    var radius;
    var bgColor;
    var btnText;
    var eleClass;

    (props.shape && props.shape == 'round' ) ? radius= '7px' : radius= '0px' ;
    (props.color) ? bgColor = props.color : bgColor= '#444' ;
    (props.text) ? btnText = props.text : btnText= 'Click Me' ;
    (props.className) ? eleClass = props.className : eleClass= '' ;

    return (
        <button 
            className={eleClass}
            style={{
                backgroundColor: bgColor,
                borderRadius: radius,
                padding: '10px 20px 10px 20px',
                border: 'none',
                fontWeight: '600',
                color: '#fff',
            }}
        >
            {btnText}
        </button>
    );
};

export default Button;
