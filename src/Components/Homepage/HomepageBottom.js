import React, { Component } from 'react';
import Card from './card'
import image1 from "../../assets/screening_b.jpg";
import image2 from "../../assets/rent.jpg";
import image3 from "../../assets/vol.jpg";




class HomepageBottom extends Component {


    render(){

        return(
            <div className= "homepage__bottom">
                <div className="homepage__bottom-container">
                    <Card 
                    img={image1}
                    heading={"Pre-Employment Screening"}
                    text= {"We have a range of pre-employment screening services and packages available for employers and human resource departments."}/>
                    <Card
                    img={image2}
                    heading={"Tenant Screening"} 
                    text={"We offer comprehensive tenant screening services for property owners, property management companies and private landlords."}/>

                    <Card 
                    img={image3}
                    heading={"Volunteer Screening"}
                    text={"We provide thorough background screening of volunteers for groups, clubs, associations, charities and non-profit organizations."}
                    />

                </div>

            </div>
        )
    }
}





























export default HomepageBottom;