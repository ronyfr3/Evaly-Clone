
import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import 'react-awesome-slider/dist/styles.css';
import './slider.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {

  return (
    <div className="silde-wrapper">
       <p className='campaign-text'>Ongoing Campaigns</p>
      <div className='sliders'>
      <AutoplaySlider
          organicArrows={false}
          buttonContentRight={<RightArrow/>}
          buttonContentLeft={<LeftArrow/>}
          play={true}
          cancelOnInteraction={false}
          interval={3000}
          bullets={false}
          mobileTouch={true}
          className="carousel"
          >
           <div className="main-text-field">
                     <p className='top-text'>quick deal</p>
                     <p className='bottom-text'>quick deal next day shopping</p>
                   </div>

                   <div className="main-text-field1">
                     <p className='top-text'>sme deal</p>
                     <p className='bottom-text'>sme deal helps you get more prizes</p>
                   </div>
        
                   <div className="main-text-field2">
                     <p className='top-text'>mega quick deal</p>
                     <p className='bottom-text'>mega quick deal offers you lots of rewards</p>
                   </div>
      </AutoplaySlider>
      </div>
    </div>
  )
}

export default Slider
