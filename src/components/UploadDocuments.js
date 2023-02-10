import React, { useState,useEffect } from 'react';

function UploadDocuments() {

const jwt = 'eyJjdHkiOiJ0ZXh0XC9wbGFpbiIsImFsZyI6IkVTNTEyIn0.eyJ1c2VyX2VudGl0eSI6ImNvcnJlc3BvbmRlbnQuQVBYMSIsInN1YiI6IkNBTkFEQV9URVNUX0ZPUkJJRERFTiIsImF1ZCI6WyJhcGV4Y2xlYXJpbmcubG9jYWwiXSwidXNlcl9pcCI6IjEwLjE4MC45LjEyMCIsIm5iZiI6MTY3NjAyOTY4MSwiaXNzIjoiYXBleGNsZWFyaW5nLmxvY2FsIiwidXNlcl9jbGFzcyI6IkNMSUVOVF9DUkVERU5USUFMU19VU0VSIiwiZXhwIjoxNjc2MTE5OTgxLCJpYXQiOjE2NzYwMjk5ODEsImp0aSI6Ijc2YzJmMGQxLTc4ODItNDI4Zi05Mzc1LTk5NmZkMTQxODFkZCJ9.AFNflmtzwtpNMeHAMZBBkVMhFCn3HPlHcKnQZQH1_pAuJjdTKhadg6bOMWRooUpPa-Q83G6OFTmO76LW5SAQuvaPADVmHsbuTs-z2oHvDvdN8yjfEs3nfZDYygv6hkBnILcHIiedczOIe67Wiu-6s8-zXPAivxH8Wm4aOuUQ8QIRk8W8';
const [selectedFile, setSelectedFile] = useState(null);

const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
};

const [alert, setAlert] = useState({ open: false, color: "" });
const [alertMessage, setAlertMesssage] = useState("");

const Push = () => {
  setAlert({ open: true, color: "#4BB543" });
  setAlertMesssage("Document successfully uploaded!!");
}

const handleUpload = async () => {
  if (selectedFile) {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8080/api/v1/uploads', {
        method: 'POST', 
        body: formData, 
        headers: {
          'authorization': jwt,
          'Content-Type': 'multipart/form-data'}
        });

        if(!response.ok) {
          throw new Error("Failed to upload file");
        }

        console.log("File uploaded successfully");
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <h1>Upload Documents </h1>
      <p>You can upload your documents on this page</p>
      <input 
        type="file" 
        accept=".pdf, .jpg, .jpeg, .png, .txt" 
        onChange={handleFileChange}
      />
      {/* <button onClick={handleUpload}>Upload</button> */}
      <button onClick={ console.log("Document was successfully uploaded!!") }>Upload</button>
      {selectedFile ?  (
        <p>Selected file: {selectedFile.name}</p>
      ) : ( <p> No file selected</p>)}
    </div>
  );
}

export default UploadDocuments;