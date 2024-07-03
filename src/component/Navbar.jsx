import React from 'react';
import r from "./Assests/R.png"
import { Link } from 'react-router-dom';
class LoginPage extends React.Component {
    

    render() {
        return (
            <div className="container" style={{backgroundColor:'#E6E6FA',height:'100vh',backgroundSize:'cover'}}>
                <h1 style={{ textAlign: 'center', color: '#4B0082', fontWeight: 'bold' ,paddingTop:'20px'}}>Jyothi Engineering College</h1>
                <div className="button-container" style={{ textAlign: 'center' , marginTop: '20px',color:'white' }}>
                    <button className="student-login"  style={{ backgroundColor: '#FFB6C1', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Home</button>
                    <a href='/login'><button  className="faculty-login"  style={{ backgroundColor: '#FFB6C1', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button></a>
                    <a href='/About'><button  className="about-us"  style={{ backgroundColor:'#FFB6C1', marginRight: '10px', padding: '10px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>About Us</button></a>
                    <button className="home"  style={{ backgroundColor: '#FFB6C1', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>More</button>
                </div>
            </div>
        );
    }
}

export default LoginPage;
