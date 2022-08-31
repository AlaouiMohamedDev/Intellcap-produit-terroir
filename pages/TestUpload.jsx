import React,{ useState } from 'react'


export default function TestUpload() {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {        
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);  
    body.append("upload_preset",'products')  
    const response = await fetch("https://api.cloudinary.com/v1_1/dhi1q4hre/image/upload", {
      method: "POST",
      body
    }).then(r=>r.json());
    console.log("🚀 ~ file: TestUpload.jsx ~ line 25 ~ uploadToServer ~ response", response)

    setImage(response.secure_url)
    setCreateObjectURL(response.secure_url)
  };
    
  return (
    <div>
        <div>
            <img src={createObjectURL} />
            <h4>Select Image</h4>
            <input type="file" name="myImage" onChange={uploadToClient} />
            <button
            className="btn btn-primary"
            type="submit"
            onClick={uploadToServer}
            >
            Send to server
            </button>
        </div>
     </div>
  )
}
