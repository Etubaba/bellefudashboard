import React from 'react'
import { Carousel } from 'react-responsive-carousel'


const SliderCompo = ({ image }) => {
  return (
    <Carousel style={{ height: 100 }}>

      {image.map((image, index) => (
        <div key={index}>
          <img style={{ height: "60%", width: "100%" }}
            src={`https://bellefu.inmotionhub.xyz/get/verification/image/${image}`} />
        </div>))}

    </Carousel>
  )
}



export default SliderCompo