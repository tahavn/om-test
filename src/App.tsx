import React from "react";
import {Route, Switch} from "react-router-dom";

import {Cart, Catalog} from "./pages";
import {Footer, Header} from "./components";

import "./App.scss"

function App() {
    return (
        <div className="page">
            <Header/>
            <main className="page__content">
                <Switch>
                    <Route path="/" component={Catalog} exact/>
                    <Route path="/cart" component={Cart} exact/>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
