import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Showcase from './Showcase';
import LoginForm from './LoginForm';
import Footer from './Footer';

function LoginRoute() {
    return (
        <div>
            <Header/>
            <Showcase/>
            <div className="container-sm">
                <Route
                    path='/login'
                    render={()=>(
                    <LoginForm/>
                    )}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default LoginRoute;