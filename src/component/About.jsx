import React from 'react';

export default function AboutUs() {
  return (
    <div style={styles.container}>
      <div style={{ textAlign: 'center', padding: '50px'}}>
        <h1>About Us</h1>
        <p>
          Welcome to our website!
        </p>
    
     
        <footer style={{ marginTop: '50px', fontStyle: 'italic' }}>
          Made by Amith
        </footer>
      </div>
    </div>
  );
};
const styles={
  container:{
    backgroundImage:'url(https://cdn.dribbble.com/users/144388/screenshots/1515241/about-us-gif.gif)',
    backgroundSize:'cover',
    height:'100vh',
}
};