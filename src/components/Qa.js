import React from 'react'
import Navbar from './Navbar'
import '../css/Qa.css'
import Feed from './Feed'
import Home from "./Home";
import Myposts from "./Myposts";
import Profile from "./Profile";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function Qa() {
    return (
        <div className="qa">
            <Router>
            <Navbar />
                <Switch>
                    <Route path='/' exact component = {Home} />
                    <Route path="/home" component={Home}/>
                    <Route path="/myposts" component={Myposts}/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </Router>
            {/* <div className="qa__content">
                <Feed />
            </div>       */}
        </div>

    )
}

export default Qa
