import React from 'react'
// import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component{

    logout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }
    
    render(){
       return( 
        <div className="ui menu" style={{justifyContent: 'flex-end'}} >
            <a className="item"  style={{}} href={"/dashboard"}>
                <h2 className="ui header">
                <i className="cloud icon" />
                <div className="content">Cloud Clean</div>
                </h2>
            </a>
            {/* <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/signup" style={{color: "black"}}>SignUp</Link>
                </div>
            </h2>
            </div>
            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/login" style={{color: "black"}}>Login</Link>
                </div>
            </h2>
            </div> */}



            {/* render conditionally at some point */}
            
            <div className="item" >
                <h2 className="ui header">
                    <div className="content">
                    <button className="ui massive button" onClick={this.logout}>Logout</button>
                    </div>
                </h2>
            </div>
            
            
        </div>
       )
    }
}

export default withRouter(NavBar)