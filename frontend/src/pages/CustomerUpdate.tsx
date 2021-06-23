import React from "react";

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
            <div style={{paddingTop: 100}}>
                <div className="container">
                    <p>Hello World</p>
                </div>
            </div>
        )
    }
}