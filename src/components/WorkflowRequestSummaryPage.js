import React, { useState, useEffect } from "react";
import { getSalesWorkflowRequestSummary } from "../api/salesWorkflowSummaryApi";
import WorkflowRequestInfo from "./WorkflowRequestInfo";
import CommentsDetails from "./CommentsDetails"
import WorkflowSummaryHistory from "./WorkflowSummaryHistory"
import { Link } from "react-router-dom";
import './CustomStyles.css';

function WorkflowRequestSummaryPage() {
const [wfSummary, setWFSummary] = useState({
  id: "SalesWF01",
  createdBy: "Vranda Sharma",
  createdDate : "26/01/2019",
  productCode:"Media",
  productClientCode: "Marketing",
  attachments: [
    "http://attachment1", "http://attachment2"
  ],
  stepSummary: [
    {
      name: "INIT",
      status: "COMPLETED"
    },
    {
      name: "GROUP_APPROVALS",
      status: "IN_PROGRESS"
    },
    {
      name: "SUPERVISOR_APPROVAL",
      status: "IN_PROGRESS"
    },
    {
      name: "DOC_CONVERSION",
      status: "PENDING"
    }
  ],
  comments: [
    {
      from: "legal@citi.com",
      commentText: "Request approved",
      commentTimestamp: "12/06/2020"
    },
    {
      from: "compliance@citi.com",
      commentText: "Request approved",
      commentTimestamp: "14/06/2020"
    }
  ],
  description: ""
});

// useEffect(() => {
//    // getSalesWorkflowRequestSummary().then(_wfSummary => setWFSummary(_wfSummary));
//   },[]);

  return (
    <>
    <div className="row" >
      <div className="col divstyle">
      <WorkflowRequestInfo wfSummary={wfSummary}/>
      </div>
      <div className="col commentsdivstyle">
      <CommentsDetails comments={wfSummary.comments}/>
      </div>
    </div>
    <div className="row">
      <div className="col divstyle">
      <WorkflowSummaryHistory/>
      </div>
    </div>
    </>
  );
}

export default WorkflowRequestSummaryPage;
