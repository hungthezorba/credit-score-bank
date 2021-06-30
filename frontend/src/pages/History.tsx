import {useEffect} from 'react';
import GlobalFilter from '../components/GlobalFilter';

const History = () => {
    
    // Import search icon
    useEffect(() => {
        window.scrollTo(0, 0);
        
        const script = document.createElement('script');
      
        script.src = "https://kit.fontawesome.com/62b2ff62ed.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);


    return (
        <>
        <br /><br /><br /><br />
        <div className="History" style={{paddingTop: 20}}>
        <body className="body">
            <div id="content" >
                <p className="header" style={{
                    fontSize: "30px",
                    textAlign: "center",
                    fontWeight: "bold"
                }}>HISTORY</p>
            </div>	
            
            {/* <FilterTable /> */}
            <GlobalFilter />

            {/* Final Padding Page */}
            <div style={{paddingTop: 100}}></div>
        </body>
        </div>
        </>
        
        
    );
        }
export default History;