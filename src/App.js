import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContext } from './context/auth';
function App(props) {
    return (
        <AuthContext.Provider value={false}>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home page</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin page</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <PrivateRoute path="/admin" component={Admin} />
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
