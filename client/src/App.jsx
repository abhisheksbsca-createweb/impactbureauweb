import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home.jsx'
import OurMission from './component/Pages/OurMission/OurMission.jsx';
import Header from './component/header/Header.jsx';
import Story from './component/Pages/Story/Story.jsx';
import OurWork from './component/Pages/OurWork/OurWork.jsx';
import ImpactTV from './component/Pages/ImpactTv/ImpactTv.jsx';
import WhereWeWork from './component/Pages/WhereWeWork/WhereWeWork.jsx';
import MoreAbout from './component/Pages/MoreAbout/MoreAbout.jsx';
import Nominate from './component/Pages/Nominate/Nominate.jsx';
import Footer from './component/Pages/Footer/Footer.jsx';
function App() {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/where-we-work" element={<WhereWeWork />} />
        <Route path="/more-about" element={<MoreAbout />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/impact-tv" element={<ImpactTV />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/nominate" element={<Nominate />} />

      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App;
