import React, { Component } from "react";
import Slider from "react-slick";
import "./recommendations.css";

//HERE, THE FOLLOWING NAME IS CHANGED TO RECOMMENDATIONS In the following
// export default class Responsive extends Component {

//REACT SLICK DOCUMENTATION:- https://react-slick.neostack.com/docs/example/responsive

export default class Recommendations extends Component {
  render() {
    //HERE, RENDER IS DOING THE FUNCTION WORK
    var settings = {
      dots: true, //WHETHER TO DISPLAY CLICKABLE DOTS OR NOT IN THE BOTTOM. THE NUMBER OF DOTS IS GENERATED BY NUMBER OF SLIDE PAGES
      infinite: true, //WHETHER TO SCROLL COUNTLESSLY OR NOT
      speed: 1000, //DETERMINES THE SPEED OF SCROLLING
      slidesToShow: 4, //DETERMINES NUMBER OF SLIDES TO SHOW IN THE BAR
      slidesToScroll: 4, //DETERMINES HOW MANY SLIDES TO SCROLL AT WHEN SLIDING
      initialSlide: 0, //DETERMINES WHICH SLIDE TO SHOW AT IN THE BEGINNING
      autoplay: true, //DETERMINES WHETHER TO AUTOPLAY OR NOT
      autoplaySpeed: 2000, //DETERMINES THE SPEED OF AUTOPLAY IN MILLISECOND
      pauseOnHover: true, //PAUSES THE AUTOPLAY ON HOVER
      // centerMode: true,        //TRIES TO PUT CONTENTS IN CENTER
      // centerPadding: 100,          //DETERMINES THE PADDING BETWEEN TWO SLIDES
      responsive: [
        {
          breakpoint: 1244, //this is like in mediaquery, HERE THIS WILL DEFINE IT FOR DISPLAY UPTO 1224 PX OR GRATER
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024, //this is like in mediaquery, HERE THIS WILL DEFINE IT FOR DISPLAY UPTO FROM 720 TILL 1024 PX
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 720, //this is like in mediaquery, HERE THIS WILL DEFINE IT FOR DISPLAY UPTO FROM 480 TILL 720 PX
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480, //this is like in mediaquery, HERE THIS WILL DEFINE IT FOR DISPLAY UPTO 480 PX
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      //HERE RETURN IS DOING THE DISPLAY WORK
      <div className="container-fluid mx-auto mt-5">
        {/* IF WE USE DIV CLASS AS CONTAINER, IT WILL ADD EXTRA MARGIN IN BOTTOM SO BETTER USE CONTAINER FLUID IN SLICK */}

        {/* <div className="container-fluid mx-auto mt-5"> CONTAINER FLUID TAKES WHOLE PAGE i.e WHOLE WIDTH Whereas CONTAINER TAKES 75%*/}
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div className="slick-img-container">
            <img src="https://cellbuddy.in/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Smartphones-491997731-i-2-1200Wx1200H.jpeg"></img>
          </div>

          <div className="slick-img-container">
            <img src="https://fatafatsewa.com/storage/media/3844/Samsung-Galaxy-Z-Flip3-Cream-color-images.jpg"></img>
          </div>

          <div className="slick-img-container">
            <img src="https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Morning%20mist-gallery.png"></img>
          </div>

          <div className="slick-img-container">
            <img src="https://www.gizmochina.com/wp-content/uploads/2019/03/motorola-razr-2019-1-500x500.jpg"></img>
          </div>

          <div className="slick-img-container">
            <img src="https://cdn.dxomark.com/wp-content/uploads/medias/post-74840/samsunggalaxys21ultra5g.jpg"></img>
          </div>

          <div className="slick-img-container">
            <img src="https://dlcdnwebimgs.asus.com/gain/56BB3442-7143-494F-9EC9-037290A3CBBF"></img>
          </div>

          <div className="slick-img-container">
            <img src="https://specifications-pro.com/wp-content/uploads/2020/05/Xiaomi-Mi-Mix-Alpha-2.jpg"></img>
          </div>

          <div className="slick-img-container">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61Tzn3DgBxL.jpg"></img>
          </div>
        </Slider>
      </div>
    );
  }
}

//IF TO DO THIS IN RAFCE, IT IS A BIT TRICKY FOR RENDER AND RETURN, IT WILL BE LIKE:-
// import React from 'react'

// THE VAR OF RENDER CAN BE DEFINED HERE OR INSIDE CONST
// var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// };

// const Recommendations = () => {
//      ALTERNATIVELY, VAR IS DEFINED HERE IN CASE OF RAFCE
//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         return (                                        //HERE RETURN IS DOING THE DISPLAY WORK
//         <div>
//             <h2> Responsive </h2>
//             <Slider {...settings}>
//                 <div>
//                     <h3>1</h3>
//                 </div>
//                 <div>
//                     <h3>2</h3>
//                 </div>
//                 <div>
//                     <h3>3</h3>
//                 </div>
//                 <div>
//                     <h3>4</h3>
//                 </div>
//                 <div>
//                     <h3>5</h3>
//                 </div>
//                 <div>
//                     <h3>6</h3>
//                 </div>
//                 <div>
//                     <h3>7</h3>
//                 </div>
//                 <div>
//                     <h3>8</h3>
//                 </div>
//             </Slider>
//         </div>
//     )
// }

// export default Recommendations
