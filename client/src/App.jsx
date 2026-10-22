import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home.jsx'
import OurMission from './component/Pages/OurMission/OurMission.jsx';
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='ourmission' element={<OurMission/>}/>
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App;
