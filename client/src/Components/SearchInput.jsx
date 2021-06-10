import React from "react";
import TextField from "@material-ui/core/TextField"

export default function SearchInput({
  onChange
}){
  return(
    <TextField id="file-search-input" label="Search" variant="outlined" onChange={onChange}/>
  );
}
