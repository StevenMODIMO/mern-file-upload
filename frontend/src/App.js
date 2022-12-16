import React, {useState} from 'react';
import axios from 'axios'

function App () {
  const [uploadedFile, setUploadedFile] = useState ('');

  function handleFormSubmittion (e) {
    e.preventDefault ();

    let form = document.getElementById ('form');
    let formData = new FormData (form);

    // new line added
    axios.post ('http://localhost:4000/api/add', formData);
  }

   

  function handleUploadedFile (e) {
    setUploadedFile (e.target.value);
  }

  return (
    <React.Fragment>
      <h1>File upload</h1>
      <form
        encType="multipart/form-data"
        onSubmit={handleFormSubmittion}
        id="form"
      >
        <input
          type="file"
          name="uploadedFile"
          value={uploadedFile}
          onChange={handleUploadedFile}
          required
        />
        

        <button type="submit">Submit Form</button>
      </form>
    </React.Fragment>
  );
}

export default App;