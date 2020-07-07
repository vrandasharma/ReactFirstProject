import React, { useState, useEffect } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./CommonComponents.css";

function StepProgressBar(props) {

  return (
    <div class="container">
    <div class="row bs-wizard">
    {props.stepSummary.map(step => {
              let stepDiv;
              if(step.status === "COMPLETED"){
                stepDiv = <div class="col-xs-3 bs-wizard-step complete">
                <div class="text-center bs-wizard-stepnum">{step.name}</div>
                <div class="progress"><div class="progress-bar"></div></div>
                <a href="#" class="bs-wizard-dot"></a>
                <div class="bs-wizard-info text-center">{step.name}</div>
              </div>;
              } else  if(step.status === "IN_PROGRESS"){
                stepDiv = <div class="col-xs-3 bs-wizard-step active">
                <div class="text-center bs-wizard-stepnum">{step.name}</div>
                <div class="progress"><div class="progress-bar"></div></div>
                <a href="#" class="bs-wizard-dot"></a>
                <div class="bs-wizard-info text-center">{step.name}</div>
                </div>;
              } else {
                stepDiv = <div class="col-xs-3 bs-wizard-step disabled">
                <div class="text-center bs-wizard-stepnum">Step 4</div>
                <div class="progress"><div class="progress-bar"></div></div>
                <a href="#" class="bs-wizard-dot"></a>
                <div class="bs-wizard-info text-center">Lorem ipsum dolor</div>
                </div>;
              }
          return (
            // {stepDiv}
            <div class="col-xs-3 bs-wizard-step complete">
            <div class="bs-wizard-info text-center">{step.name}</div>
            <div class="progress"><div class="progress-bar"></div></div>
            <a href="#" class="bs-wizard-dot"></a>
            <div class="text-center bs-wizard-stepnum">{step.name}</div>
            </div>
          );
        })}
         
       </div>
      </div> );
}

export default StepProgressBar;
