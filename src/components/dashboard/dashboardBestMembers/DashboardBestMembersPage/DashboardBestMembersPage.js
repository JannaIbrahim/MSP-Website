import React,{Component} from 'react';
import "./DashboardBestMembersPage.css"
class BestMembers extends Component {
    // state = {  }
    render() { 
        return (
        <div className="containerr">
       
			
	<header className="head">
		    	
            <h1 className="title_text "> Best Members</h1>
	  	    <div className="div_input  col-3 ">
	  		<input type="text" className="search_txt" placeholder="Search..."/>
	  	    <a className="search_btn"> <h1 className="sicn"><img src="/icons/search.svg" className="scn" /></h1></a>
            </div>
            <div className="div_icon col-3"> 
	       <a href="#"> <img src="/icons/box.svg" className="icn " /></a>
           <a href="#">  <img src="/icons/bell.svg" className="icn"/></a>
           <a href="#"> <img src="/icons/user.svg" className="icn"/></a>
            </div>

	</header>

                       
                 
                        {/* <!------------------start fieldset----------------> */}
                        
		<fieldset className="field">
			 {/* <!------------------start legend--------------------> */}
	      <legend className="legen">
                 <h2 className="head2">Best Members</h2>
              <div className="legen-icon-box">
              <a href="#"> <img src="/icons/add.svg" className="icna" /></a>
	              <input className="legen-icon-txt" type="text" name="" placeholder="Add Best Member"/>
                  </div>
	      </legend>
	       {/* <!------------------end legend--------------------> */}
	       {/* <!------------------start table-------------------> */}
	      
	      <table className="table-data" >
	      	 {/* <!------------------first row--------------------> */}
	          <tr className="firstrow">
			  		<td className="data">Name</td>
			  		<td className="data">Commity</td>
			  		<td className="data">Sub Commity</td>
			  		<td className="data">Month</td>
			  		<td className="data">Edit\Delete</td>
	          </tr>
	           {/* <!------------------seacond row--------------------> */}
			  	<tr>
			  		<td className="data" >Mohamed Ahmed</td>
			  		<td  className="data">Developers</td>
			  		<td className="data" >web</td>
			  		<td className="data" >june</td>
			  		<td className="data icons" >   <a href="#"> <img src="/icons/edit.svg" className="icnd" /></a> &nbsp;    <a href="#"> <img src="/icons/delete.svg" className="icnd" /></a>
		            </td>
			  	</tr>
			  	 {/* <!------------------third row--------------------> */}
			  	<tr>
			  		<td className="data">Mohamed Ahmed</td>
			  		<td className="data">Developers</td>
			  		<td className="data">web</td>
			  		<td className="data">june</td>
			  		
			  		<td className="data icons">   <a href="#"> <img src="/icons/edit.svg" className="icnd" /></a> &nbsp;    <a href="#"> <img src="/icons/delete.svg" className="icnd" /></a>
		            </td>
			  	</tr>
			  	 {/* <!------------------forth row--------------------> */}
			  	<tr>
			  		<td className="data">Mohamed Ahmed</td>
			  		<td className="data">Developers</td>
			  		<td className="data">web</td>
			  		<td className="data">june</td>
			  		<td className="data icons">   <a href="#"> <img src="/icons/edit.svg" className="icnd" /></a> &nbsp;     <a href="#"> <img src="/icons/delete.svg" className="icnd" /></a>
		            </td>
			  	</tr>
			  	 {/* <!------------------fifth row--------------------> */}
			  	<tr>
			  		<td className="data">Mohamed Ahmed</td>
			  		<td className="data">Developers</td>
			  		<td className="data">web</td>
			  		<td className="data">june</td>
			  		<td className="data icons">   <a href="#"> <img src="/icons/edit.svg" className="icnd" /></a> &nbsp;     <a href="#"> <img src="/icons/delete.svg" className="icnd" /></a>
		            </td>
			  	</tr>
			  	 {/* <!------------------sixth row--------------------> */}
			  	<tr >
			  		<td className="data">Mohamed Ahmed</td>
			  		<td className="data">Developers</td>
			  		<td className="data">web</td>
			  		<td className="data">june</td>
			  		<td className="data icons">   <a href="#"> <img src="/icons/edit.svg" className="icnd" /></a> &nbsp;     <a href="#"> <img src="/icons/delete.svg" className="icnd" /></a>
		            </td>
			  	</tr>
			  	 {/* <!------------------seventh row--------------------> */}
			  	<tr >
			  		<td className="data">Mohamed Ahmed</td>
			  		<td className="data">Developers</td>
			  		<td className="data">web</td>
			  		<td className="data">june</td>
			  		<td className="data icons">   <a href="#"> <img src="/icons/edit.svg" className="icnd" /></a> &nbsp;    <a href="#"> <img src="/icons/delete.svg" className="icnd" /></a>
		            </td>
			  	</tr>
			  	 {/* <!------------------eighth row--------------------> */}
			    <tr>
			  		<td className="lastrow">Mohamed Ahmed</td>
			  		<td className="lastrow">Developers</td>
			  		<td className="lastrow">web</td>
			  		<td className="lastrow">june</td>
			  		<td className="lastrow icons">   <a href="#"> <img src="/icons/edit.svg" className="icnd" /></a> &nbsp;    <a href="#"> <img src="/icons/delete.svg" className="icnd" /></a>
			  		
		            </td>
			  	</tr>
	      </table>
	       {/* <!------------------end table--------------------> */}
	  </fieldset>
	   	       
			
		</div>
 
        
        );
    }
}
 
export default BestMembers;