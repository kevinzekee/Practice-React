import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PropsPage from "./pages/PropsPage";
import CounterPage from "./pages/CounterPage";
import TemperaturePage from "./pages/TemperaturePage";

function App(){
  return(
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/PropsPage" element={<PropsPage/>}/>
      <Route path="/CounterPage" element={<CounterPage/>}/>
      <Route path="/TemperaturePage" element={<TemperaturePage/>}/>
    </Routes>
  )
}

export default App;