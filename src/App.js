import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import {useContext} from "react";
import {EshopContext} from "./context/context";

const App = () => {
    const { isLoading } = useContext(EshopContext);

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {/*{isLoading ? <Loading/> : <Dashboard/>}*/}
                        <Dashboard/>
                    </Route>
                    <Route path='*'>
                        <Error/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
