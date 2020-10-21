import React, { Component } from 'react';
import './dashboardLogginForm.css'
class DashboardLogginForm extends Component {
    state = {  }
    render() { 
        return (
            <div>
        <form className='container col-lg-4 dashboard-form'>
          <h2>MSP DASHBOARD</h2>   
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary" id='sign-btn'>Sign</button>
      </form>
        </div>
        
         );
    }
}
 
export default DashboardLogginForm;