import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home.component';
import Navi from './routes/Nav/nav.component'
import LogIn from "./routes/logIn/login.component";

const Shop = ()=>{
  return(
    <h1>Wow Spend Money</h1>
  )
}

const App=()=> {
  return ((
    <Routes>
      {/* whatever is at the top level of routes will persist on all pages */}
      <Route path='/' element={<Navi />}>
        {/* set an element to index as the base component */}
      <Route index element={<Home />}/> 
      <Route path='shop' element={<Shop />}/> 
      <Route path='Login' element={<LogIn/>}/>     
      </Route>       
    </Routes>
  )
  );
}

export default App;
