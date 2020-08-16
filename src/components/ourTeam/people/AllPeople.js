import React, { Component } from 'react'
import Person from "./Person.js"

export default class AllPeople extends Component {

    state = {
    personInfo : [
        {
            id :  1 ,
            name: "Esraa Elshibly" ,
            position : "Vice Head Developer" ,
            pic :  "../Team Image/b.jpg",
            icon : "fab fa-github" ,
            linnk:  "https://github.com/EsraaElshibly"
        } ,
        {
            id :  2 ,
            name: "Omar Zidan" ,
            position : "Leader in Back-End" ,
            pic :  "../Team Image/d.jpg",
            icon : "fab fa-github" ,
            linnk:  "https://github.com/OmrZdn"
        } ,
        {
            id :  3 ,
            name: "Janna Ibrahim" , 
            position : "Leader in Front-End" ,
            pic :  "../Team Image/h.jpg",  
            icon : "fab fa-github" ,
            linnk:  "https://github.com/JannaIbrahim"
        } ,
        {
            id :  4 , 
            name: "Asmaa Fayed" , 
            position : "Member in Front-End" ,
            pic :  "../Team Image/e.jpg", 
            icon : "fab fa-github" , 
            linnk:  "https://github.com/asmaafayed02"
        } ,
        {
            id :  5 , 
            name: "Alaa Hussien" , 
            position : "Member in Front-End" ,
            pic :  "../Team Image/f.jpg",
            icon : "fab fa-github" ,  
            linnk:  "https://github.com/alaahussein22"
        } ,
        {
            id :  6 , 
            name: "Esraa Magdy" , 
            position : "Member in Front-End" ,
            pic :  "../Team Image/c.jpg", 
            icon : "fab fa-github" , 
            linnk:  "https://github.com/esraaMgdy"
        } ,
        {
            id :  7 , 
            name: "Ahmed Gamal" , 
            position : "Member in Front-End" ,
            pic :  "../Team Image/g.jpg", 
            icon : "fab fa-github" , 
            linnk:  "https://github.com/AhmedGamaal"
        } ,
        {
            id :  8 , 
            name: "Doaa Amin" , 
            position : "Member in Front-End" ,
            pic :  "../Team Image/i.jpg", 
            icon : "fab fa-github" , 
            linnk:  "https://github.com/DoaaAmin99"
        } ,
        {
            id :  9 , 
            name: "Amina Emad" , 
            position : "Member in Front-End" ,
            pic :  "../Team Image/a.jpg",  
            icon : "fab fa-github" ,
            linnk:  "https://github.com/amina836"
        } 
   
    
    ]
}
    render() {
        return (
            <div>
                <Person Info = {this.state.personInfo} />
            </div>
        )
    }
}