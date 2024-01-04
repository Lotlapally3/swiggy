import React from "react";
import  ReactDOM  from "react-dom/client";
import '../style.css';
import HeaderComponent from "./components/HeaderComponents";

import BodyComponent from "./components/BodyComponent";

import FooterComponent from "./components/FooterComponent";

 // Footer Component
 

 //App Component
 const AppComponent = () => {
    return (
        <div className="App">
            <HeaderComponent></HeaderComponent>
            <BodyComponent></BodyComponent>
          
            <FooterComponent></FooterComponent>
        </div>
    )
 };


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent></AppComponent>);