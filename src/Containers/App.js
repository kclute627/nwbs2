import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import HomeHeader from '../Components/Header/HomeHeader';
import HomepageTop from '../Components/Homepage/HomepageTop';





class App extends Component {


    render(){


        return(
            <div>
                <Header/>
                <HomeHeader/>
                <HomepageTop />

            </div>
            
        )
    }
}





export default App;