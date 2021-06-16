import {Input, Flex, Heading} from '@chakra-ui/react'
import {useEffect} from 'react';
import GlobalFilter from '../components/GlobalFilter';

const History = () => {
    
    // Import search icon
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://kit.fontawesome.com/62b2ff62ed.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);


    return (
        //<div className="History">
        <body className="body">
            <div id="content" >
                <Heading style={{color:"#3445b4", marginLeft: "20px"}} mb={5}>History</Heading>
            </div>	
            
            {/* <FilterTable /> */}
            <GlobalFilter />
            
        </body>
        //</div>
        
        
        
    );
}
 
export default History;