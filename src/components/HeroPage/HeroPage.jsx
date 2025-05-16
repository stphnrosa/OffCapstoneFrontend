// reference:https://www.w3schools.com/howto/howto_css_hero_image.asp
// reference:https://www.youtube.com/watch?v=I2UBjN5ER4s
import React from "react";
import "../../App.css";
import { Button } from '../Button/Button'
import "./HeroPage.css";

export default function HeroPage() {
  return (
    <div className="hero-container">
      <h1> Cortexi: Track, Train and Transform your mind </h1>
      <p> What are you waiting for? Start today.</p>
      {/* <div className="hero-btns">
        <button 
        className='btns'
        buttonStyle="btn--outline"
         buttoneSize="btn--large"
         to="/Assessment">
          Take the assessment
        </button>
        <button 
        className='btns'
        buttonStyle="btn--outline"
         buttoneSize="btn--large"
         to="/About">
          Learn More
        </button>
      </div> */}
    </div>
  );
}



// import React from "react";
// // import "./HeroPage.css"

// export default function HeroPage() {
//   return (
//     <section
//       className="hero"
//       style={{
//         Width: "100vw",
//         height: "100vh",
//         overflow: "hidden",
//         textAlign: "left",
//         position:"relative",
//         // paddingTop: '100px',

//       }}
//     >
//       <img
//         src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2019/12/shutterstock_576832348.jpg"
//         alt="Synapse animation"
//         style={{
//           top:0,
//           left:0,
//           position:"absolute",
//           Width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           // marginTop: "1rem",
//           // position: "absolute",
//           zIndex: -1,
//         }}
//       />
//       <div style={{

//       }}>
//         <h1>Cortexi: The app that betters your brain</h1>
//         <h3>Check the Status of your brain</h3>
//       </div>
//     </section>
//   );
// }
