import React from 'react';

export default function AboutUs() {
  return (
    <div class="contents" style={{"backgroundImage":'url(log.jpg)',"color":"white",height: '100vh'}}>
    <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>About Us</h1>
        <p>
          Explore the heights of adventure and discovery amidst breathtaking mountain landscapes with us at Beyond the Crest.
        </p>
    
     
       
      </div>
    </div>
  );
};
const styles={
  container:{
    backgroundImage:'url(log.jpg)',
    backgroundSize:'cover',
    height:'100vh',
}
};
