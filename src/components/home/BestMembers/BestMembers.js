import React,{Component} from 'react';
// import  from 'react';
import "./BestMembers.css"
class BestMembers extends Component {
    // state = {  }
    render() { 
        return ( 
            <div className="slider_members" >
               
              
                        
                            <div class="container ">
                                                                
                                <div className="slider row">

                                        <div className="card_members col-lg-4">

                                            <img src="/images/vectortwins160200158.jpg"  className="img_member" />

                                            <br/>
                                            <span className="name_member">Ahmed Gamal</span>

                                            <br/>
                                            <span className="sub_member">Web</span>

                                        </div>

                                        <div className="card_members col-lg-4 ">

                                            <img src="/images/vectortwins160200158.jpg" className="img_member"/>
                                            <br/>

                                            <span className="name_member">Ahmed Gamal</span>
                                            <br/>

                                            <span className="sub_member">Web</span>
                                        </div>

                                        <div className="card_members col-lg-4">
                                            <img src="/images/vectortwins160200158.jpg" className="img_member"/>
                                            <br/>

                                            <span className="name_member">Ahmed Gamal</span>
                                            <br/>

                                            <span className="sub_member">Web</span>
                                        </div>

                                </div>

                </div>

            </div>
         );
    }
}
 
export default BestMembers ;