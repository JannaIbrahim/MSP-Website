import React,{Component} from 'react';
import { Modal,Button,Row,Col,From } from 'react-bootstrap';


    
class PopUp extends Component {
   

    closePop =()=> {
       
            //or Close run this  function 
        // function name(params) {
            // code hidden pop up
        // }
    };

     yesPop =()=> {
     

         //or yes run this  function 
        // function name(params) {
            // code Delete row member
        // }

    };
       
     
    render() { 
        return ( 
   <div>
     {/* start code bootstrap */}
<Modal.Dialog>
  <Modal.Header closeButton onClick={this.closePop}>
    <Modal.Title>DELETE</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p> You're sure you want to delete the member.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button  onClick={this.closePop} variant="danger">No</Button>
    <Button onClick={this.yesPop} variant="primary">Yes</Button>
  </Modal.Footer>
</Modal.Dialog>
{/* end code bootstrap */}
 </div>
         );
    }
}
 
export default PopUp;