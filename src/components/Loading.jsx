import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <div className="loading-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",

      }}

    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div >
  );
}

export default Loading;
