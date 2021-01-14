import {/*Link*/ Route /*useRouteMatch*/} from 'react-router-dom';
// import Home from './Home';
import LoginPage from './LoginPage';
import RegisterationPage from './RegisterationPage';
import '../App.css';
import Header from './Header'
import Showcase from './Showcase';
import Footer from './Footer';
import Services from './Services';
import Departments from './Departments';
import DoctorDashboard from './DoctorDashboard'
import SubHeader from './SubHeader';
import Account from './Account';
// import FrontDeskDashboard from './FrontDeskDashboard'

function App() {
  return (
    <div className="container-sm">
      <Header/>
      <Route
        exact path={`/`}
        render={()=>(
          <div>
            <Showcase/>
          </div>
        )}
      />

      <Route exact path={`/account`}>
        <Account/>
      </Route>

      <Route exact path={`/login`}>
        <Showcase/>
        <LoginPage/>
      </Route>

      <Route exact path={`/register`}>
        <Showcase/>
        <RegisterationPage/>
      </Route>

      <Route path={`/doctor`}>
        <DoctorDashboard/>
      </Route>

      <Route path={`/services`}>
        <Services/>
      </Route>

      <Route path={`/departments`}>
        <Departments/>
      </Route>

      <Route path={`/frontdesk`}>
        {/* <FrontDeskDashboard/> */}
      </Route>

      <Footer/>
    </div>
  );
}

export default App;