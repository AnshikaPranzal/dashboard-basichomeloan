// import React,{useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { getApplications } from './helper';

// function App() {

//   useEffect(() => {
//     getApplications().then(data=>{
//       if(data){
//         if(data.error){
//           console.log(data.error)
//         }
//         else{
//           console.log("App",data)
//         }
//       }
//     })
//   }, [])
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";

// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard/Analytics";
import Review from "./dashboard/Profile";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Dashboard} />
          <Route exact path={"/:id"} component={Review} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
