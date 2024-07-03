import React from 'react';
import r from "./Assests/R.png"
import { Link } from 'react-router-dom';
class LoginPage extends React.Component {
    

    render() {
        return (
            <div className="container" style={{backgroundImage:'url(main.jpg)',height:'100vh',backgroundSize:'cover'}}>
                <h1 style={{ textAlign: 'center', color: '#F4E1FC', fontWeight: 'bold' ,paddingTop:'20px'}}>Beyond the Crest</h1>
                <div className="button-container" style={{ textAlign: 'center' , marginTop: '20px' }}>
                    <button className="student-login"  style={{ backgroundColor: '#212021', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer',color:'#E3BAF5' }}>Home</button>
                    <a href='/login'><button  className="faculty-login"  style={{ backgroundColor: '#212021', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer',color:'#E3BAF5' }}>Login</button></a>
                    <a href='/About'><button  className="about-us"  style={{ backgroundColor:'#212021', marginRight: '10px', padding: '10px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer',color:'#E3BAF5' }}>About Us</button></a>
                    <button className="home"  style={{ backgroundColor: '#212021', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer',color:'#E3BAF5' }}>More</button>
                </div>
            </div>
        );
    }
}

export default LoginPage;
