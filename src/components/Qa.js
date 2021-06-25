import React from 'react'
import Navbar from './Navbar'
import '../css/Qa.css'
import Feed from './Feed'
import Home from "./Home";
import Myposts from "./Myposts";
import Notifications from "./Notifications";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function Qa() {
    return (
        <div className="qa">
            <Router>
            <Navbar />
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/myposts" component={Myposts}/>
                    <Route path="/notifications" component={Notifications}/>
                </Switch>
            </Router>
            <div className="qa__content">
                <Feed />
            </div>      
        </div>

    )
}

export default Qa
