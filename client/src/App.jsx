import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home.jsx'
import OurMission from './component/Pages/OurMission/OurMission.jsx';
import Header from './component/header/Header.jsx';
import Story from './component/Pages/Story/Story.jsx';
import OurWork from './component/Pages/OurWork/OurWork.jsx';
import ImpactTV from './component/Pages/ImpactTv/ImpactTv.jsx';
import WhereWeWork from './component/Pages/WhereWeWork/WhereWeWork.jsx';
import MoreAbout from './component/Pages/MoreAboutUS/MoreAbout/MoreAbout.jsx';
import Nominate from './component/Pages/Nominate/Nominate.jsx';
import Footer from './component/Pages/Footer/Footer.jsx';
import Login from './component/Pages/Login/Login.jsx';
import Signup from './component/Pages/Signup/Signup.jsx';
import ProtectedRoute from './component/auth/ProtectedRoutes.jsx';
// import UserDashboard from './component/Pages/UserDashboard/UserDashboard.jsx';
// import AdminDashboard from './component/Pages/AdminDashboard/AdminDashboard.jsx';
import HowWeVerify from './component/Pages/MoreAboutUS/How we verify/HowWeVerify.jsx';
import OurStory from './component/Pages/MoreAboutUS/OurStory/OurStory.jsx';
import WhoBelongsHere from './component/Pages/MoreAboutUS/WhoBelongsHere/WhoBelongsHere.jsx';
function App() {

  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/where-we-work" element={<WhereWeWork />} />
        {/* <Route path="/more-about" element={<MoreAbout />} /> */}
        <Route path="more-about">
          <Route index element={<MoreAbout />} />
          <Route path="howweverify" element={<HowWeVerify />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="whobelongs" element={<WhoBelongsHere />} />

        </Route>

        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/impact-tv" element={<ImpactTV />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/nominate" element={<Nominate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/userdashboard" element={<UserDashboard />} /> */}
        {/* <Route path="/admindashboard" element={<AdminDashboard />} /> */}
        {/* <Route path="/dashboard" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} /> */}

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
