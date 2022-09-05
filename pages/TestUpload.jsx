import React,{ useState } from 'react'
import axios from 'axios'

export default function TestUpload() {
  const [image, setImage] = useState(null);

  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      
      setImage(i);
      console.log("🚀 ~ file: TestUpload.jsx ~ line 14 ~ uploadToClient ~ i", i.name)

      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {        
    const body = new FormData();
    // console.log("file", image)
    //body.append("file", image);  
    body.append("ProductUpload",image)
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var fullname=date+time+"-"+image.name
    //https://api.cloudinary.com/v1_1/dhi1q4hre/image/upload
    //body.append("upload_preset",'products'), 
    const response = await fetch(`https://images.codata-admin.com/api-file-upload-terroir.php?name=${fullname}`, {
      method: "POST",
      body
    }).then(r=>r.json());
    console.log("🚀 ~ file: TestUpload.jsx ~ line 25 ~ uploadToServer ~ response", response)

    setImage("http://images.codata-admin.com/terroir/products/"+response.image)
    setCreateObjectURL("http://images.codata-admin.com/terroir/products/"+response.image)
  };

  const DeleteFromServer = async () =>{
    
    const data = {
      path:'terroir/products',
      image:'2022-08-31T21:22:04+00:00-product.png'
    }

    const response = await axios.post("https://images.codata-admin.com/api-delete-file-terroir.php",data)
    .then(res =>{
      console.log("🚀 ~ file: TestUpload.jsx ~ line 46 ~ DeleteFromServer ~ res", res)
    });
    // console.log("🚀 ~ file: TestUpload.jsx ~ line 45 ~ DeleteFromServer ~ response", response)
    

  }

  
  const UpdateFromServer = async () =>{
    const body = new FormData();
    // console.log("file", image)
    //body.append("file", image);  
    body.append("Upload",image)
    
    const data = {
      folder:'products',
      image:'2022-09-01T03:04:41+00:00-product.png'
    }

    const response = await fetch(`https://images.codata-admin.com/api-update-file-terroir.php?folder=${data.folder}&image=${data.image}`,{
      method: "POST",
      body
    }).then(r=>r.json());
    console.log("🚀 ~ file: TestUpload.jsx ~ line 25 ~ uploadToServer ~ response", response)
    // console.log("🚀 ~ file: TestUpload.jsx ~ line 45 ~ DeleteFromServer ~ response", response)
    

  }
    
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

            <button
            className="bg-red-500 text-white"
            type="submit"
            onClick={DeleteFromServer}
            >
            Delete from server
            </button>

            <button
            className="bg-green-500 text-white"
            type="submit"
            onClick={UpdateFromServer}
            >
           Update from server
            </button>
        </div>
     </div>
  )
}
