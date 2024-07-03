import React from 'react';
import r from "./Assests/R.png"
import { Link } from 'react-router-dom';
class LoginPage extends React.Component {
    

    render() {
        return (
            <div className="container" style={{backgroundImage:'url(main.jpg)',height:'100vh',backgroundSize:'cover'}}>
                <h1 style={{ textAlign: 'center', color: '#4B0082', fontWeight: 'bold' ,paddingTop:'20px'}}>Jyothi Engineering College</h1>
                <div className="button-container" style={{ textAlign: 'center' , marginTop: '20px' }}>
                    <button className="student-login"  style={{ backgroundColor: '#333333', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer',color:'white' }}>Home</button>
                    <a href='/login'><button  className="faculty-login"  style={{ backgroundColor: '#333333', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer,color:'white'' }}>Login</button></a>
                    <a href='/About'><button  className="about-us"  style={{ backgroundColor:'#333333', marginRight: '10px', padding: '10px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer',color:'white' }}>About Us</button></a>
                    <button className="home"  style={{ backgroundColor: '#333333', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer',color:'white' }}>More</button>
                </div>
            </div>
        );
    }
}

export default LoginPage;
