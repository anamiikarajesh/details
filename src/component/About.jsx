import React from 'react';

export default function AboutUs() {
  return (
    <div class="contents" style={{"backgroundImage":'url(log.jpg)',"color":"white",height: '100vh'}}>
    <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>About Us</h1>
        <p>
          Embark on a journey of adventure and discovery with us at Beyond the Crest.
          </p>
          <p>
          We're passionate about exploring the world's most breathtaking mountain landscapes and sharing captivating tales that ignite a sense of curiosity. 
          </p>
      <p>
          Join our community as we delve into thrilling escapades, uncover hidden gems, and embrace the spirit of exploration beyond every crest.
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
