import React from "react";
import { createClient, dedupExchange, cacheExchange, Provider } from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import "./FileUpload.css";
import UploadForm from '../components/UploadForm';

interface ResultPageProps {

}

interface ResultPageState {

}

const client = createClient({
  url: "http://localhost:3000",
  exchanges: [dedupExchange, cacheExchange, multipartFetchExchange]
});

export default class FileUpload extends React.Component<ResultPageProps, ResultPageState> {
constructor(props: any) {
    super(props);

    this.state = {

    };
  }

    render() {
        return (
            <Provider value={client}>
                <main className="container">
                    <UploadForm />
                </main>
                </Provider>
        );
    }
}