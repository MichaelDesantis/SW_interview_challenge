import React from "react";
import logo from './logo.svg';
import './App.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import DocumentListing from "./Components/DocumentListing";
import SearchInput from "./Components/SearchInput";
import UploadForm from "./Components/UploadForm";

import uploadService from "./Services/uploadService"
// TODO: Modal for input (file rename) OPTIONAL
// TODO: confirm modal (file delete) OPTIONAL
// TODO: Error component OPTIONAL

function App() {
  const [files, setFiles] = React.useState([]);
  const [showUploadSuccess, setShowUploadSuccess] = React.useState(false);

  // TODO: catch statements, error handling

  React.useEffect(() => {
    fetch("/api/documents")
      .then((res) => res.json())
      .then((filesList) => {setFiles(filesList)});
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SearchInput />
        <UploadForm onClick={(e) => uploadService(e, (res) => {
          res.status === 200 && setShowUploadSuccess(true);
        })}/>
        {/* TODO: apply filters, abstract this listing logic*/}
        {(
          files.length ? 
            files.map((file, key) => {
              return (<DocumentListing key={key} fileName={file} />)
            }) : <p>No Files Found.</p>
        )}
      <Dialog onClose={() => setShowUploadSuccess(false)} open={showUploadSuccess}>
        <DialogTitle>File Uploaded successfully</DialogTitle>
      </Dialog>
    </div>
  );
}

export default App;
