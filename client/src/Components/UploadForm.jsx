import React, { useState } from "react";
import Button from "@material-ui/core/button"

export default function UploadForm ({
  onClick
}){

  // TODO: create a way to clear form from external component. form.reset() or similar
  const [fileSelected, setFileSelected] = useState(false);

  return(
    <form id="file_upload_form" encType="multipart/form-data" method="post" action="/api/upload">
      <input type="file" id="file_upload" name="file_upload" onChange={(e) => {
        !!e.target.value ?
          setFileSelected(true) :
          setFileSelected(false)
      }}></input>
      <Button
        disabled={!fileSelected}
        variant="contained"
        color="primary"
        type="submit"
        onClick={(e) => onClick(e)}>
        Upload File
      </Button>
    </form>
  );
}
