import {/*Link*/ Route /*useRouteMatch*/} from 'react-router-dom';
// import Home from './Home';
import LoginPage from './LoginPage';
import RegisterationPage from './RegisterationPage';
import '../App.css';
import Header from './Header'
import Showcase from './Showcase';
import Footer from './Footer';
import DoctorDashboard from './DoctorDashboard'

function App() {
  return (
    <div>
      <Route
        exact path={`/`}
        render={()=>(
          <div>
            <Header/>
            <Showcase/>
          </div>
        )}
      />

      <Route exact path={`/login`}>
        <Header/>
        <Showcase/>
        <LoginPage/>
        <Footer/>
      </Route>

      <Route exact path={`/register`}>
        <Header/>
        <Showcase/>
        <RegisterationPage/>
        <Footer/>
      </Route>

      <Route path={`/doctor`}>
        <DoctorDashboard/>
      </Route>
      

    </div>
  );
}

export default App;