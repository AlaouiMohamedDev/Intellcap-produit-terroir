import { IncomingForm } from 'formidable'


var mv = require('mv');

export const config = {
    api: {
       bodyParser: false,
       sizeLimit: '10mb' // Set desired value here
    }
};
 
export default async (req, res) => {
    
    // const options=[{
    //     maxFileSize:200*1024*1024
    // }];
 
        const data = await new Promise((resolve, reject) => {
            
           const form = new IncomingForm()
           
           form.parse (req, (err, fields, files) => {
                if (err){
                    return reject(err)
                }
                var oldPath = files.file.filepath;
                var newPath = `./public/product/${files.file.originalFilename}`;
               mv(oldPath, newPath, function(err) {
                  
                });
                res.status(200).json({ fields, files })
            })
          
        })

}

