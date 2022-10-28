import React, {useState, useEffect} from 'react';
import axios from 'axios'

function App () {
  const [uploadedFile, setUploadedFile] = useState ('');
 const [image, setImage] = useState('') 

  function handleFormSubmittion (e) {
    e.preventDefault ();

    let form = document.getElementById ('form');
    let formData = new FormData (form);

    // new line added
    axios.post ('http://localhost:3001/api/add', formData);
  }

   

  function handleUploadedFile (e) {
    setUploadedFile (e.target.value);
  }

  useEffect(() => {
    const getImage = async () => {
      const response = await fetch('http://localhost:3001/api/get')
      const json = await response.json()
      console.log(json)

      if(response.ok) {
        setImage(json.photo)
      }
    }
    getImage()
  })

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

      <div>
        <img src={image}  alt='ssdsd'/>
      </div>
    </React.Fragment>
  );
}

export default App;