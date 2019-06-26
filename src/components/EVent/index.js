import React from "react";

import './index.css';
//import ReactCSSTransitionGroup from 'react-transition-group'; 

export default function (props) {
    const time = new Date(parseInt(props.time,10)).toLocaleTimeString([],
        {
            hour: "numeric",
            minute: "numeric"
        })
    return (
       /* <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
       // 
        transitionEnter={true}
        transitionEnterTimeout={500}
        transitionLeave={false}>*/
        <div className="Event">

            <img src={props.image} alt="companyLogo" />
            <h2 className="Event-title" style={{'left':'5px'}}>{props.title}</h2>
            {props.children}
            <div className="Event-time">{time}</div>
        </div>
   /* </ReactCSSTransitionGroup>*/
    )
}