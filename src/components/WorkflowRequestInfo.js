import React from "react";
import { Link } from "react-router-dom";
import StepProgressBar from "./common/StepProgressBar";
import Button from "./common/Button";

function WorkflowRequestInfo(props) {
  return (
    <div>
      <h3 className="headerstyle"> Request Summary :{props.wfSummary.id}</h3>
      <div>
        <StepProgressBar stepSummary= {props.wfSummary.stepSummary} />
      </div>
      <div className="row rowstyle">
        <div className="col border-bottom border-top colstyle">
          <h6> Product type : {props.wfSummary.productCode}</h6>
        </div>
        <div className="col border-bottom border-top colstyle">
          <h6> Product client code : {props.wfSummary.productClientCode}</h6>
        </div>
      </div>
      <div className="row rowstyle">
        <div className="col border-bottom border-top colstyle">
          <h6>Created By : {props.wfSummary.id}</h6>
        </div>
        <div className="col border-bottom border-top colstyle">
          <h6>Created Date : {props.wfSummary.id}</h6>
        </div>
      </div>
      <div className="row buttoncontainerstyle">
        <div class="col">
        <Button title="Approve Request"/>
        </div>
        <div class="col">
        <Button title=" Reject document"/>
        </div>
        <div class="col">
          <Button title="Download document"/>
        </div>
      </div>
    </div>
  );
}

export default WorkflowRequestInfo;
