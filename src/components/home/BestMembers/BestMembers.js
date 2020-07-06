import React,{Component} from 'react';
import "./BestMembers.css"
class BestMembers extends Component {
    // state = {  }
    
    render() { 
        return ( 
  <div className="container" >
            {/* {console.log(`w${window.outerWidth}`)}  
            {console.log(`H${window.outerHeight}`)}   */}
                        
    
                                                     
       <div className="row">

         <div className="col">
             <img src="/images/vectortwins160200158.jpg"  className="img_member" />
             <h6 className="name_member">Ahmed Gamal</h6>
             <h6 className="sub_member">Web</h6>
             
         </div>

        <div className="col ">
            <img src="/images/vectortwins160200158.jpg" className="img_member"/>
            <h6 className="name_member">Ahmed Gamal</h6>
            <h6 className="sub_member">Web</h6>
            
        </div>

       <div className="col">
           <img src="/images/vectortwins160200158.jpg" className="img_member"/>
           <h6 className="name_member">Ahmed Gamal</h6>
           <h6 className="sub_member">Web</h6>
     
       </div>

      </div>

    

</div>
);
    }
}
 
export default BestMembers ;