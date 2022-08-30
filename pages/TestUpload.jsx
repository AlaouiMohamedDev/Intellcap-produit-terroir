import React,{ useState } from 'react'


export default function TestUpload() {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
   
  
    const uploadToClient = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
        console.log("🚀 ~ file: TestUpload.jsx ~ line 21 ~ uploadToServer ~ image", i.size)
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
        console.log("🚀 ~ file: TestUpload.jsx ~ line 7 ~ TestUpload ~ createObjectURL", createObjectURL)
      }
    };
  
    const uploadToServer = async (event) => {        
      const body = new FormData();      
      await body.append("file", image)
       console.log("🚀 ~ file: TestUpload.jsx ~ line 22 ~ uploadToServer ~ body", body)
       
      const response = await fetch("./api/upload", {method: "POST", body}).then(res=>{
        console.log(res)
      });
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
