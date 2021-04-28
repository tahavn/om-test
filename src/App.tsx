import React from "react";
import {Route} from "react-router-dom";

import {Cart, Catalog} from "./pages";
import {Footer, Header} from "./components";

import "./App.scss"

function App() {
    return (
        <div className="page">
            <Header />
            <main className="page__content">
                <Route path="/" component={Catalog} exact/>
                <Route path="/cart" component={Cart} exact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
