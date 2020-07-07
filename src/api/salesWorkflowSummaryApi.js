import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/workflowRequestStatusSummary/";

export function getSalesWorkflowRequestSummary() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
