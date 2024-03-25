import logo from './logo.svg';
import './App.css';
import { Button, Col, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './component/Home';
import Cource from './component/Cource';
import AllCources from "./component/AllCources";
import AddCourses from './component/AddCourses';
import Header from './component/Header';
import Menus from './component/Menus';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const btnHandle = () => {
    // toast("This is my first Message");
    toast.success("Done", {
      position: 'top-center'
    });
  };
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>

            <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/add-course' element={<AddCourses />} exact />
              <Route path='/view-courses' element={<AllCources />} exact />
            </Routes>

          </Col>
        </Row>
      </BrowserRouter>



    </div >
  );
}

export default App;
