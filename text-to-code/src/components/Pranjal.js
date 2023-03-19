import React from "react";
import logo from "../logo512.png";

import Carousel from "react-bootstrap/Carousel";

export default function Test() {
  // data = {'box_0': (tensor([0.04005, 0.87125, 0.45061, 0.96963]), 'Carousel'),
  // 'box_1': (tensor([0.04420, 0.25066, 0.40266, 0.42551]), 'Carousel'),
  // 'box_2': (tensor([0.53059, 0.88042, 0.96303, 0.97297]), 'Carousel'),
  // 'box_3': (tensor([0.52716, 0.67907, 0.95897, 0.86489]), 'Carousel'),
  // 'box_4': (tensor([0.01263, 0.66287, 0.50146, 0.85624]), 'Carousel'),
  // 'box_5': (tensor([0.06014, 0.04023, 0.45480, 0.21053]), 'Carousel'),
  // 'box_6': (tensor([0.50905, 0.05079, 0.93721, 0.20765]), 'Carousel'),
  // 'box_7': (tensor([0.03076, 0.45124, 0.97640, 0.64486]), 'Carousel'),
  // 'box_8': (tensor([0.42468, 0.23961, 0.96470, 0.41860]), 'Carousel')}

  const data = [
    {
      box_0: {
        Carousel: [0.04005, 0.87125, 0.45061, 0.96963],
      },
      box_1: {
        Carousel: [0.0442, 0.25066, 0.40266, 0.42551],
      },
      box_2: {
        Carousel: [0.53059, 0.88042, 0.96303, 0.97297],
      },
      box_3: {
        Carousel: [0.52716, 0.67907, 0.95897, 0.86489],
      },
      box_4: {
        Carousel: [0.01263, 0.66287, 0.50146, 0.85624],
      },
      box_5: {
        Carousel: [0.06014, 0.04023, 0.4548, 0.21053],
      },
      box_6: {
        Carousel: [0.50905, 0.05079, 0.93721, 0.20765],
      },
      box_7: {
        Carousel: [0.03076, 0.45124, 0.9764, 0.64486],
      },
    },
  ];

  const carousel = `
     
      
    `;

  return (
    <div>
      {data.map((item, index) => {

        const width = item[`box_${index}`].Carousel[2] * window.innerWidth;
        const height = item[`box_${index}`].Carousel[3] * window.innerHeight - 200;

        console.log(width);
        console.log(height + "px");

        return (
          <div key={index}>
            {/* {console.log(item[`box_${index}`])} */}
            {/* <div dangerouslySetInnerHTML={{ __html: carousel }}></div> */}
            <Carousel style={{width: width + "px", height: height + "px"}}>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={logo}
         alt="First slide"
         width={50}
         
       />
       <Carousel.Caption>
         <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://pyxis.nymag.com/v1/imgs/fdf/db0/421af17121276a71945282e440357c43cb-25-post-malone-2.rsquare.w700.jpg"
         alt="Second slide"
         width={50}
       />

       <Carousel.Caption>
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://pyxis.nymag.com/v1/imgs/fdf/db0/421af17121276a71945282e440357c43cb-25-post-malone-2.rsquare.w700.jpg"
         alt="Third slide"
       />

       <Carousel.Caption>
         <h3>Third slide label</h3>
         <p>
           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
         </p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
          </div>
        );
      })}
    </div>
  );
}
