import React from "react";
import logo from './logo.svg';
import './App.css';
// TODO: Modal for input (file rename)
// TODO: confirm modal (file delete)
// TODO: upload page /document/new ?
// TODO: document listing component
// TODO: Error component

function App() {
  const [data, setData] = React.useState(null);
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    // TODO: catch statements, Error handling
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/api/documents")
      .then((res) => res.json())
      .then((filesList) => {setFiles(filesList)});
  }, [files]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{!data ? "Loading..." : data}</p>
        {(
          files.length ? 
            files.map((file) => {
              return (<p>{file.fileName}</p>)
            }) : <p>loading...</p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
