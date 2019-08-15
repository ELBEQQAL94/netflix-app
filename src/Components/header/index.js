import React from 'react';
import Test from '../../assets/videos/test.mp4';
import TestImage from '../../assets/images/test.jpg';

// play video whene you hover it
const playVideo = () => {
    
}

const Header = () => (
    <header 
        className="header" 
    >
        <div className="logo">netflix</div>
        <div className="sub-title">
         <span>N</span>série
        </div>
        <div className="title">
            <h1>wu</h1>
        </div>

        <div className="small-title">
            <h2>assassins</h2>
        </div>
    
    <div className="desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
        <video 
            autoPlay
            playsInline 
            muted
            loop
            poster= {TestImage} 
            id="bgvid"
        >
            
            <source 
                src={Test}         
                type="video/mp4"
            />

            Sorry, your browser doesn't support embedded videos.

        </video>
    </header>
);

export default Header;