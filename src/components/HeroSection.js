import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {

    const onClick = () => {
        const scrollOptions = {
            top: 655 - window.pageYOffset,
            behavior: 'smooth'
        }
        window.scrollBy(scrollOptions)
    }

    return (
        <div className='hero-container'>
            <video src='/videos/sea.mp4' autoPlay loop muted />
            <h1>Rodrigo Martinez</h1>
            <p>Front End Engineer</p>
            <div className='hero-btns'>
                <Button 
                    onClick={onClick} 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                >
                    See Projects <i className='fas fa-code' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
