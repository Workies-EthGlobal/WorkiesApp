import React, { useState } from "react";
import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'

const UploadAndDisplayImage = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBhYjExN2Q4OWY5ZkUwQmNlQTM0MTE3OTUwQ0ViY0FDRDkwZDNCMTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjEwNzc0NDI3MzIsIm5hbWUiOiJ3b3JraWVzIn0.__A81OQfyL7wVKkjioWmopGWC3UsySsS36DUdLZ3yCI"

    const [selectedImage, setSelectedImage] = useState(null);


    const storage = new Web3Storage({ token })
    const files = []

    for (const path of args._) {
        const pathFiles = await getFilesFromPath(path)
        files.push(...pathFiles)
    }

    console.log(`Uploading ${files.length} files`)
    const cid = await storage.put(files)
    console.log('Content added with CID:', cid)
    return (
        <div>
            <h1>Upload and Display Image usign React Hook's</h1>
            {selectedImage && (
                <div>
                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <br />

            <br />
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;