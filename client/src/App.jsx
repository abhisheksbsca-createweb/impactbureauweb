import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home/Home.jsx'
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App;
