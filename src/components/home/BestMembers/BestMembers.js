import React,{Component} from 'react';

import "./BestMembers.css"
class CardMembers extends Component {

     state = 
     {
         
     img:['/images/a.jpg','/images/b.jpg','/images/c.jpg',
          '/images/d.jpg','/images/e.jpg','/images/f.jpg',
          '/images/g.jpg','/images/m.jpg','/images/l.jpg'],
          
    img2:['/images/a.jpg','/images/b.jpg','/images/c.jpg',
          '/images/d.jpg','/images/e.jpg','/images/f.jpg',
          '/images/g.jpg','/images/m.jpg','/images/l.jpg'],

    img3:['/images/a.jpg','/images/b.jpg','/images/c.jpg',
          '/images/d.jpg','/images/e.jpg','/images/f.jpg',
          '/images/g.jpg','/images/m.jpg','/images/l.jpg'],

     count0:0,  
     count1:0,  
     count2:0,  
 
     }
      
     componentWillMount()
     {
         
       setInterval(() => {
          if(this.state.count0<=this.state.img.length-2)
          {this.setState({ count0:this.state.count0+1});
          }  else     this.setState({ count0: this.state.count0=0 });
          }, 2000)


       setInterval(() => {
           if(this.state.count1<=this.state.img2.length-2)
           {this.setState({ count1:this.state.count1+1});
           }  else     this.setState({ count1: this.state.count1=0 });
           }, 2000)


       setInterval(() => {
           if(this.state.count2<=this.state.img3.length-2)
           {this.setState({ count2:this.state.count2+1});
           }  else     this.setState({ count2: this.state.count2=0 });
           }, 2000)
            
     }
    
    render() { 
     
        return ( 
            
  <div className="containerr" >
        <h2>Best Members</h2>
                            
       <div className=" row">

         <div className=" best_member_card col-lg-4 col-md-6 col-xs-12">
             <img src={this.state.img[this.state.count0]}  className="img_member" />
         <h6 className="name_member">Ahmed Gamal</h6>
             <h6 className="sub_member">WEB</h6> 
             
         </div>

          <div className=" best_member_card col-lg-4 col-md-6 col-xs-12">
             <img src={this.state.img2[this.state.count1]}  className="img_member" />
  <h6 className="name_member">Ahmed Gamal</h6>
             <h6 className="sub_member">WEB</h6>  
             
         </div>

         <div className=" best_member_card col-lg-4 col-md-6 col-xs-12">
             <img src={this.state.img3[this.state.count2]}  className="img_member" />
  <h6 className="name_member">Ahmed Gamal</h6>
             <h6 className="sub_member">WEB</h6>  


      </div>
      </div>
      


</div>


);
    }
}
 
export default CardMembers ;