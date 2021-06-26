import React from "react";
import { createClient, dedupExchange, cacheExchange, Provider } from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import UploadForm from '../components/UploadForm';

interface ResultPageProps {

}

interface ResultPageState {

}

const client = createClient({
  url: "something", // The graphql query url
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
                <main>
                    <UploadForm />
                </main>
            
                {/* Final Padding Page */}
                <div style={{paddingTop: 100}}></div>
            </Provider>
        )
    }
}