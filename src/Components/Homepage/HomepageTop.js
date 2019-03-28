import React, { Component } from 'react';
import woman from "../../assets/woman.png";
import man from "../../assets/man.png";





class HomepageTop extends Component {



    render(){
        return(
            <div className="homepage-top">
                <div className = "homepage-top-bg"></div>
                <div className = "homepage-top__container">
                    <div className = "homepage-top__text-container">

                        <div className="homepage-top__text-box-1">
                            <p>Screening services you can rely on</p>
                        </div>
                        <div className="homepage-top__text-box-2">
                            <p>Because good decisions start with accurate information</p>
                        </div>
                    
                    </div>
                    <div className= "homepage-top__image">
                        <div className= "homepage-top__image-container">
                            <img className ="homepage-top__image-woman" src={woman} />
                            <img className="homepage-top__image-man"src={man}/>
                        </div>
                        
                    
                    </div>
                </div>            
            </div>

        )
        

    }
}









export default HomepageTop;