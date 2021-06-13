import React from "react";
import { useMutation } from "urql";
import gql from "graphql-tag";

const uploadMutation = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      name
    }
  }
`;

const Upload = () => {
  const [, mutate] = useMutation(uploadMutation);
  const handleChange = React.useCallback(
    ({
      target: {
        validity,
        files: [file]
      }
    }) => validity.valid && mutate({ file }),
    [mutate]
  );
  return <input type="file" required onChange={handleChange} />;
};

export default Upload;