import React from "react";
import { useMutation } from "urql";
import gql from "graphql-tag";
import "./UploadForm.css";

const uploadMutation = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      name
    }
  }
`;

const Upload = () => {
  const [data, mutate] = useMutation(uploadMutation);
  const handleChange = React.useCallback(
    ({
      target: {
        validity,
        files: [file]
      }
    }) => validity.valid && mutate({ file }),
    [mutate]
  );

  return(
    <div className="form-container">
        {console.log(data.fetching)}
        <div className="form">
            <input 
                type="file" 
                className="custom-file-input" 
                onChange={handleChange}
                required  
            />
        </div>
    </div>
  )
}

export default Upload;