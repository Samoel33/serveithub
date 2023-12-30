import {Metadata} from 'next'
import GetAquoteComponent from "../../../../Components/GetAQuote";
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