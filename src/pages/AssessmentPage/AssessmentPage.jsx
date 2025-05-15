import React from "react";

export default function AssessmentPage() {
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
        <h1> Assessment: Stroop Effect </h1>
        <br></br>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUxPVqDiTfhMbSVu91fVxj5l9SQHu5uTkrfIdJp75G8MFGDht_yR-RQSupNden_HyQbgFGi1ntQsHnygtKDwBRA" style={{ borderRadius:'10%', width:'350px',height:'210px',
          align:'center'
           }}></img>
        <p style={{ textAlign: "left" }}>
          {" "}
          <b>The Stroop Effect</b> is a psychological experiment developed in
          1935 by American psychologist John Ridley Stroop.
         
          <br></br>
          <br></br>
          It’s a simple way to see how your brain handles confusion. The test
          challenges you to stay focused when words and colors don’t match—like
          seeing the word "Blue" written in red ink.
          <br></br>
          <br></br>
          <b>Directions</b>: Your task is to name the color you{" "}
          <b>
            <i>see</i>
          </b>
          , not the word you read- as fast as you can. It’s trickier than it
          sounds!
        </p>
      </div>
      <br></br>
      <div>
        <button
          style={{
            background: "linear-gradient(90deg, #5de0e6, #004aad",
            color: "white",
            border: "none",
            align:'right',
            padding: '15px 25px',
          }}
        > Coming Soon
        </button>
      </div>
    </div>
  );
}
