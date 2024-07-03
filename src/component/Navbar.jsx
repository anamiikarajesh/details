import React from 'react';
import r from "./Assests/R.png"
import { Link } from 'react-router-dom';
class LoginPage extends React.Component {
    

    render() {
        return (
            <div className="container" style={{backgroundImage:'url(main.jpg)',height:'100vh',backgroundSize:'cover'}}>
                <h1 style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' ,paddingTop:'20px'}}>Beyond the Crest</h1>
                <div className="button-container" style={{ textAlign: 'center' , marginTop: '20px' }}>
                    <button className="student-login"  style={{ backgroundColor: '#9FA8DA', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer',color:'#CCCCCC' }}>Home</button>
                    <a href='/login'><button  className="faculty-login"  style={{ backgroundColor: '#87CDCE', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button></a>
                    <a href='/About'><button  className="about-us"  style={{ backgroundColor:'#87CDCE', marginRight: '10px', padding: '10px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>About Us</button></a>
                    <button className="home"  style={{ backgroundColor: '#87CDCE', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>More</button>
                </div>
            </div>
        );
    }
}

export default LoginPage;
