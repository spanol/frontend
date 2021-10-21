//CSS
import './App.css';
import "./styles/form.css";

//React
import { Switch, Route } from "react-router-dom";

//Pages
import Gameview from './pages/User/Gameview/Gameview';
import Header from './components/Header/Header';
import DeleteGame from './pages/Admin/DeleteGames/DeleteGames';
import CreateUsers from './pages/User/CreateUser/CreateUsers';
import Login from './pages/User/Login/Login';
import { Home } from './pages/User/Home/Home';
import GuardedRoute from './components/GuardedRoute/GuardedRoute';
import Logout from './pages/Logout/Logout';
import CreateGames from './pages/Admin/CreateGames/CreateGames';
import UpdateGames from './pages/Admin/UpdateGames/UpdateGames';
import CreateGenre from './pages/Admin/CreateGenre/CreateGenre';
import { ProfilesList } from './pages/Profiles/Profiles';
import CreateProfile from './pages/Admin/CreateProfile/CreateProfile';


function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
            {/* PAG ABERTA */}
            <Route path="/" exact={true} component={Home}/>
            <Route path="/logout" component={Logout} />
            <Route path="/login"  component={Login}/>
            <Route path="/users/create"  component={CreateUsers}/>
            <Route path="/games/view/:id"  component={Gameview}/>
            {/* Logado */}
            <GuardedRoute path="/games/create"  component={CreateGames}/>
            <GuardedRoute path="/games/delete/:id"  component={DeleteGame}/>
            <GuardedRoute path="/games/update/:id"  component={UpdateGames}/>
            <GuardedRoute path="/user"  component={ProfilesList}/>
            <GuardedRoute path="/genre/create"  component={CreateGenre}/>
            <GuardedRoute path="/profile/create"  component={CreateProfile}/>

        </Switch> 
    </div>
  );
}

export default App;
