import React from "react";
import { Link } from "react-router-dom";

function CommentsDetails(props) {
  return (
    <div>
      <h4>Comments</h4>
      <table className="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>From</th>
          <th>Timestamp</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.comments.map(comment => {
          return (
            <tr>
              <td>{comment.from}</td>
              <td>{comment.commentTimestamp}</td>
              <td>{comment.commentText}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default CommentsDetails;
