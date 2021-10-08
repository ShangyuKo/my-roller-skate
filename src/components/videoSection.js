import React from 'react';
import '../App.css';
import { Button } from './Button';
import './videoSection.css';
import ReactPlayer from 'react-player';

const HeroSection = () =>{

  return (
    <div className='hero-container'>
      <ReactPlayer url='https://www.youtube.com/watch?v=bwF5kJdR5kk' autoPlay loop muted/>
      {/* <video src="/Videos/video.mp4" autoPlay loop muted/> */}
      <h1>Buy skates from us TODAY </h1>
      <p>start exploring the World! What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;