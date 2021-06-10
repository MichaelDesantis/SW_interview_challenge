import React from "react";
import Button from "@material-ui/core/button"

export default function UploadForm ({
  onClick, onSelect, disabled
}){

  return(
    <form id="file_upload_form" encType="multipart/form-data" method="post" action="/api/upload">
      <input type="file" id="file_upload" name="file_upload" onChange={(e) => {
        onSelect(e);
      }}></input>
      <Button
        disabled={disabled}
        variant="contained"
        color="primary"
        type="submit"
        onClick={(e) => onClick(e)}>
        Upload File
      </Button>
    </form>
  );
}
