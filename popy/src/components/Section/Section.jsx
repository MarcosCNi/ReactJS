import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "../Home";
import About from "../About";
import Products from "../Products";
import Contact from "../Contact";
import ContactView from "../ContactView";
import "./style.css";

function Section(){
    return(
        <>
            <section id="section" className="container">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/products">
                        <Products/>
                    </Route>
                    <Route exact path="/contacts">
                        <Contact/>
                    </Route>
                    <Route exact path="/contacts/view">
                        <ContactView/>
                    </Route>
                </Switch>
            </section>
        </>
    );
}

export default Section;