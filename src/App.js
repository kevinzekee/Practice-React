import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PropsPage from "./pages/PropsPage";
import CounterPage from "./pages/CounterPage";
import TemperaturePage from "./pages/TemperaturePage";
import TimerPage from "./pages/TimerPage";
import FetchPage1 from "./pages/FetchPage1";
function App(){
  return(
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/PropsPage" element={<PropsPage/>}/>
      <Route path="/CounterPage" element={<CounterPage/>}/>
      <Route path="/TemperaturePage" element={<TemperaturePage/>}/>
      <Route path="/TimerPage" element={<TimerPage/>}/>
      <Route path="/FetchPage1" element={<FetchPage1/>}/>
    </Routes>
  )
}

export default App;