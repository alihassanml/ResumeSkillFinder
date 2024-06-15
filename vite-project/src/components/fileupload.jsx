import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './fileupload.css'

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleFileChange = e => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        alert('File Uploaded Successfuly! Go Home Page')
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setResults(response.data);
            
            // Navigate to the Home component after successful upload
            navigate('/home'); // <--- Make sure this path matches the route in App.js
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };

    return (
        <>
        <div className='main-div'>
            <h1 className='heading-upload'>Upload Your File</h1>
            <div className="main-div-1">
                <input type="file" className='file-upload'  onChange={handleFileChange} />
                <br />

                <button onClick={handleUpload} className='file-button'>Upload</button>
                {results.map((result, index) => (
                    <div key={index}>
                        <strong>{result.label}:</strong> {result.text}
                    </div>
                ))}
            </div>
        </div>
        </>

    );
};

export default FileUpload;
