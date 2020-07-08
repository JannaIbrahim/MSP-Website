import React,{Component} from 'react';
import "./BestMembers.css"
class BestMembers extends Component {
     state = 
     {
     img:['/images/a.jpg','/images/b.jpg','/images/c.jpg',
          '/images/d.jpg','/images/e.jpg','/images/f.jpg',
          '/images/g.jpg','/images/m.jpg','/images/l.jpg'],
     count0:0,  
     count1:1,  
     count2:2,  
     }

  
      
     componentWillMount()
     {
         setInterval(() => {
        
            if(this.state.count0<this.state.img.length)
            {
                this.setState({ count0:this.state.count0+3});
            }  else     this.setState({ count0: this.state.count0=0 });
            



            if(this.state.count1<this.state.img.length)
            {
                this.setState({ count1:this.state.count1+3});
            }  else    this.setState({ count1: this.state.count1=1 });



            if(this.state.count2<this.state.img.length)
            {
                this.setState({ count2:this.state.count2+3});
            }  else this.setState({ count2: this.state.count2=2 });

            }, 2000)

            
     }
    
    render() { 
     
        return ( 
            
  <div className="container" >
                                                 
       <div className="row">


         <div className="col">
                    <img src={this.state.img[this.state.count0]}  className="img_member" />
             <h6 className="name_member">Ahmed Gamal</h6>
             <h6 className="sub_member">Web</h6>
             
         </div>

        <div className="col ">
            <img src={this.state.img[this.state.count1]} className="img_member"/>
            <h6 className="name_member">Ahmed Gamal</h6>
            <h6 className="sub_member">Web</h6>
            
        </div>

       <div className="col">
           <img src={this.state.img[this.state.count2]} className="img_member"/>
           <h6 className="name_member">Ahmed Gamal</h6>
           <h6 className="sub_member">Web</h6>
     
       </div>

      </div>
      

</div>


);
    }
}
 
export default BestMembers ;