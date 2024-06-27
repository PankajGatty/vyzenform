import logo from './logo.svg';
import './App.css';
import { MainPages } from './MainPages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { Page5 } from './pages/Page5';
import { Page6 } from './pages/Page6';
import { Page7 } from './pages/Page7';
import { Page8 } from './pages/Page8';
import { Page9 } from './pages/Page9';
import { Page10 } from './pages/Page10';
import { Page11 } from './pages/Page11';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<><MainPages/><Page1/></>}/>
        <Route path="/page2" element={<><MainPages/><Page2/></>}/>
        <Route path="/page3" element={<><MainPages/><Page3/></>}/>
        <Route path="/page4" element={<><MainPages/><Page4/></>}/>
        <Route path="/page5" element={<><MainPages/><Page5/></>}/>
        <Route path="/page6" element={<><MainPages/><Page6/></>}/>
        <Route path="/page7" element={<><MainPages/><Page7/></>}/>
        <Route path="/page8" element={<><MainPages/><Page8/></>}/>
        <Route path="/page9" element={<><MainPages/><Page9/></>}/>
        <Route path="/page10" element={<><MainPages/><Page10/></>}/>
        <Route path="/page11" element={<><MainPages/><Page11/></>}/>

      </Routes>
    </BrowserRouter>        );
}

export default App;
