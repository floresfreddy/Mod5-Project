import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './LandingPage.css'
import SimpleImageSlider from 'react-simple-image-slider'
import register from './images/register.png'

class LandingPage extends React.Component{

    
    logout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }
    
   
    
    render(){

        const images = [
            {url: register}
        ]

       return( 
        <div>   
            <div className="ui menu">
                <div className="item" style={{flexGrow: 5}} href={"/"}>
                    <h2 className="ui header">
                        <i className="cloud icon" />
                        <div className="content">Cloud Clean</div>
                    </h2>
                </div>
                <div className="item" >
                    <h2 className="ui header">
                        <div className="content">
                            <Link to="/login" style={{color: "black"}}>LOG-IN</Link>
                        </div>
                    </h2>
                </div>
                <div className="item" style={{color: "red"}}>
                    <h2 className="ui header">
                        <div className="green ui massive button">
                            <Link to="/signup" style={{color: "White"}}>Start Here</Link>
                        </div>
                    </h2>
                </div>
                
            </div>
            <div class="container">
                <div class="row">
                    <div className="column-66" >
                        <h1>Start working today</h1><br/>
                        <h2><span>Cloud Clean</span> gives you everything you need to start a home dry cleaning business</h2>
                        <br/>
                        <button className="red ui massive button">Try the live demo</button>
                        <br/>
                        <br/>
                        <a href="/">Learn more about Cloud Clean</a>
                    </div>
                    {/* <div class="column-66">
                        <h1 class="xlarge-font"><b>Cloud Clean</b></h1>
                        <h1 class="large-font" style={{color:"MediumSeaGreen"}}><b>Why buy it?</b></h1>
                        <p><span style={{fontSize: "36px"}}>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button class="button">Download Application</button>
                    </div> */}
                    <div class="column-33">
                        <SimpleImageSlider class='' width={500} height={471} images={images}/>
                        {/* <img width={471} height={471} src={register}/> */}
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
       )
    }
}

export default withRouter(LandingPage)