import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Showcase from './Showcase';
import LoginForm from './LoginForm';
import RegisterationForm from './RegisterationForm';
import Footer from './Footer';
import Alldoctors from './alldoctor'
import LoginRoute from './LoginRoute'
import RegisterRoute from './RegisterRoute'
//import Transferpatient from './patient/Transferpatient
function App() {
  return (
    <div>
      <Route
        path='/doc'
        component={Alldoctors}
      />
      <Route
        path='/login'
        component={LoginRoute}
      />
      <Route
        path='/register'
        component={RegisterRoute}
      />
    </div>
  );
}

export default App;
         // <Route
         // path='/frontdesk'
         // component={Transferpatient}
         // />

// render(){​​​​​
//   return(
//     <div className= "App container">
//          <BrowserRouter> 
//         <Doctor/> 
//         <Route exact path="/myaccont" render={​​​​​()=>{​​​​​return(<Form onChange={​​​​​this.handlechange()}​​​​​ />)}​​​​​}​​​​​/> 
//          <Route  path="/myschedules" render={​​​​​()=>{​​​​​
//            return(
//              <div>
//                <h1 className="text-center">Schedule</h1> 
//        <Scheduleitem items={​​​​​this.state.items}​​​​​ deleteitem={​​​​​this.deleteitem}​​​​​ />
//        <Addschdule addItem={​​​​​this.addItem}​​​​​/> 
//              </div>
//            )
//          }​​​​​ }​​​​​/>   
//        </BrowserRouter>  
//        {​​​​​/* <Form onChange={​​​​​this.handlechange()}​​​​​ /> */}​​​​​
//     </div>
//   );
// }​​​​​