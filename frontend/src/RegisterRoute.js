import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Showcase from './Showcase';
import RegisterationForm from './RegisterationForm';
import Footer from './Footer';

function RegisterRoute () {
    return (
        <div>
            <Header/>
            <Showcase/>
            <div className="container-sm">
            <Route
                path='/register'
                render={()=>(
                <RegisterationForm/>
                )}
            />
            </div>
            <Footer/>
        </div>
    )
}

export default RegisterRoute;