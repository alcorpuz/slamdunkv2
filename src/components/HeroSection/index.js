import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight


 } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src= { Video } type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Slam Dunk Pizza</HeroH1>
            <HeroP>
                Welcome to Slam Dunk Pizza! We're a local pizza team in Mendocino County that strives to
                hit it out of the park with our great pizza. We have locations in Redwood Valley, Ukiah, and Willits!
                We are huge fans of our communities and strive to give back any way we can. Come on in during your seventh 
                inning stretch and grab a delicious slice of pizza! 🍕
            </HeroP>
            <HeroBtnWrapper>
                <Button
                 to='about'
                 onMouseEnter={onHover}
                 onMouseLeave={onHover}
                 primary='true'
                 dark='true'
                >
                    Our Story {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection