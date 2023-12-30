import {Metadata} from 'next'
import GetAquoteComponent from "src/Components/GetAQuote.tsx";
export const metadata: Metadata = {
  title:"Request Quote Form",
  description: 'Request quotation form',
}
function GetAquote() {
 
    return (
    <>
    <GetAquoteComponent/>
    </>
    );
}

export default GetAquote