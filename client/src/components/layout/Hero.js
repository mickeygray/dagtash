import React from 'react'
import hero from '../../images/Hero/hero.jpg'
import hero2 from '../../images/Hero/hero2.jpg'
import hero3 from '../../images/Hero/hero3.jpg'

const Hero = () => {
    return (
        <div>
            <img src={hero3} alt="ContactUs"/>
            <img src={hero2} alt="Services"/>
            <img src={hero} alt="Home" />
        </div>
    )
}

export default Hero
