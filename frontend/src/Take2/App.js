import {/*Link*/ Route /*useRouteMatch*/} from 'react-router-dom';
// import Home from './Home';
import LoginPage from './LoginPage';
import RegisterationPage from './RegisterationPage';
import '../App.css';
import Header from './Header'
import Showcase from './Showcase';
import Footer from './Footer';
import Services from './Services';
import DoctorDashboard from './DoctorDashboard'

function App() {
  return (
    <div>
      <Header/>
      <Route
        exact path={`/`}
        render={()=>(
          <div>
            <Showcase/>
          </div>
        )}
      />

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

      <Footer/>
    </div>
  );
}

export default App;