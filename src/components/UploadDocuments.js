import React, { useState } from 'react';

function UploadDocumnets() {

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }
  
  return (
    <div>
      <h1>Upload Documents </h1>
        <p>You can upload your documents on this page</p>
          <input type="file" accept=".pdf, .jpg, .jpeg, .png, .txt" onChange={handleFileChange}/>
            {selectedFile ?  (
              <p>Selected file: {selectedFile.name}</p>
            ) : ( <p> No file selected</p>)}
      </div>
  );
}

export default UploadDocumnets;