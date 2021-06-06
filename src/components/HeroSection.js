import { Divider } from '@material-ui/core';
import '../App.css';
import React from 'react';
import './HeroSection.css';

function HeroSection(){
    return(
    <div className='hero-container'>
       <video src="/videos/video1.mp4" autoPlay look muted/>
       <div id="video-text">
       <h1>DRESSIFY</h1>
       <pre>L O C K  Y O U R  M O D E L. </pre>
       </div>
    </div>
    );
}

export default HeroSection