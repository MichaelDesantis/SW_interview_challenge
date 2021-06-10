import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import DocumentListing from "./Components/DocumentListing";
import SearchInput from "./Components/SearchInput";
import UploadForm from "./Components/UploadForm";

import uploadService from "./Services/uploadService"
// TODO: Modal for input (file edit/rename) OPTIONAL
// TODO: confirm modal (file delete) OPTIONAL
// TODO: Error component OPTIONAL

function App() {
  const [files, setFiles] = useState([]);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  const fetchFileList = () => {
    fetch("/api/documents")
      .then((res) => res.json())
      .then((filesList) => {setFiles(filesList)})
      .catch((err) => {
        console.error(err);
        setFiles([]);
      });
  };

  // Initial Load
  useEffect(() => {
    fetchFileList();
  }, []);

  const resetForm = () => {
    document.getElementById("file_upload").value = "";
    setFileSelected(false);
  };

  const renderListingsWithFilter = (filesArr, filterStr) => {
    if(!filesArr.length) {
      return (
        <p>No Files Found.</p>
      );
    }

    const out = filesArr.filter(fileName => fileName.includes(filterStr.toLowerCase()));
    if(!out.length) {
      return (
        <p>No Files Found.</p>
      );
    }

    return out.map((file, key) => {
      return (<DocumentListing key={key} fileName={file} />)
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SearchInput onChange={(e) => {
        setSearchStr(e.target.value)
      }}/>
        <UploadForm
          onClick={(e) => uploadService(e, (res) => {
            if (res.status <= 300) {
              resetForm();
              setShowUploadSuccess(true);
              fetchFileList();
            };
          })}
          onSelect={(e) => {
            !!e.target.value ?
            setFileSelected(true) :
            setFileSelected(false);
          }}
          disabled={!fileSelected}
          />
        {renderListingsWithFilter(files, searchStr)}
      <Dialog onClose={() => setShowUploadSuccess(false)} open={showUploadSuccess}>
        <DialogTitle>File Uploaded successfully</DialogTitle>
      </Dialog>
    </div>
  );
}

export default App;
