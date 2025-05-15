import React from 'react'
import HeroPage from '../../components/HeroPage/HeroPage.jsx'

// export default function Homepage() {
//   return (
//     <div>
//     <HeroPage />
//     </div>

//   )
// }
export default function Homepage() {
  return (
    <div
      style={{
        textAlign: "center",
        border: "5px solid",
        padding: "10px",
        backgroundColor: "#0096c7",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#fffbf0",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "left",
          color: "#0077b6",
          width: "50%",
          marginTop:'10px'
        }}
      >
        <h1></h1>
        <br></br>
        <HeroPage />
      </div>
      <br></br>
    </div>
  );
}
