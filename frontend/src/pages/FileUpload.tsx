import React from "react";
import "./FileUpload.css";

interface ResultPageProps {

}

interface ResultPageState {

}

export default class FileUpload extends React.Component<ResultPageProps, ResultPageState> {
constructor(props: any) {
    super(props);

    this.state = {

    };
  }

    render() {
        return (
            <div className="container">
                <p className="header">File Upload</p>
                <input></input>
            </div>
        );
    }
}