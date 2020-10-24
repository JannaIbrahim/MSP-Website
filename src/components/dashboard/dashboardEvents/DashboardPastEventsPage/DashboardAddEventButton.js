import React, { Component } from 'react';
class DashboardAddEventButton extends Component {
    state = {  }
    render() { 
        return ( 
        <section>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                        <div className="row addition">
                            
                            <div className="col-xl-12 col-sm-12 mt-8 pr-0 pl-0">
                                <button className=" add-event-btn">
                                        <i className="material-icons add-icon">add</i>
                                        <span className="add-event "> Add Event</span>
                                </button>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
          </section>
      );
    }
}
 
export default DashboardAddEventButton;