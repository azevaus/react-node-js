import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Roteamento
import { Route, Switch} from 'react-router-dom';
//Componentes
import OnePage from "./pages/OnePage";
import Products from "./pages/Product";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
    return (
        <dv>
            <GlobalStyle/>
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <OnePage/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
            </Switch>
            <Footer/>
        </dv>
    );
}

export default App;