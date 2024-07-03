import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Herosc from "./componets/herosc";
import MessageBox from "./componets/message";
// import Onoutstore from "./componets/onourstore";
import Page1 from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";
import Navbar from './componets/navbar'
import Footer from './componets/footer'
import Contact from './componets/contact'

function App() {
  return (
    <>
     
      <div className="container main">
        <Router>
        <Navbar/>
          <Routes>
          <Route path="/" element={ <Herosc />} />  
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="contact" element={<Contact />} />
       
          </Routes>
          <MessageBox />
       
        </Router>
      </div>
      <Footer/>
    </>
  );
}

export default App;
