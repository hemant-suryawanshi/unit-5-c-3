import {Routes,Route} from "react-router-dom"
import { Admin } from "./components/Admin";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { EmployeeList } from "./components/EmployeeList";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* hello world */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/employees" element={<EmployeeList/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/employees/:id" element={<EmployeeDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
