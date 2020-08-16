import React, { Component } from 'react';
class DashboardPastEentsRender extends Component {
    state = { 
     }
    render() {//calling data from the state
        const {pastEventsData} = this.props; 
        //maping to render events
        let pastEventsList = pastEventsData.map(eventItem =>{
            return(
                <section key={eventItem.event_id}>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                        <div className="col-md-12 col-sm-12">
                          <div className="card card-stat">
                            <div className="card-header card-header-success">
                              <div className="card-icon">
                                <img className="w-100 events" src={eventItem.event_image} alt="event1"/>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title pt-2 ">{eventItem.event_title} </h5>
                                  <div className="card-left text-right">
                                      <i className="material-icons">access_time</i> 
                                      <span className="campaign">{eventItem.event_date.the_date}</span>
                                      <i className="fas fa-edit ml-3"></i>
                                      <i className="far fa-trash-alt ml-2"></i>
                                  </div>
                                  <p className="card-category">{eventItem.event_discription} </p> 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </section>
                )
        })
    return ( <div>{pastEventsList}</div> );
    }
}
 
export default DashboardPastEentsRender;