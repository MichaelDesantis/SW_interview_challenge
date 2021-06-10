import React from "react";

export default function DocumentListing ({
  fileName
}){

  return(
    <div className="document-container">{fileName}</div>
  );
}
