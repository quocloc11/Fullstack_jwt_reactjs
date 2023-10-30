import {
    Switch,
    Route
} from "react-router-dom";
import Login from '../components/Login/Login';
import Users from '../components/ManageUsers/Users';
import Register from '../components/Register/Register';
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes=(props)=>{
    const Project=()=>{
        return(
            <span>Projects</span>
        )
    }
    return (
    <>
    <Switch>
         
         
        <PrivateRoutes path="/users" component={Users}/>
        <PrivateRoutes path="/projects" component={Project}/>

          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/register">
          <Register/>
          </Route>
          <Route path="/" exact>
          home
          </Route>
          <Route path="*">
            404 not found
          </Route>
        </Switch>
    </>
    )
}

export default AppRoutes