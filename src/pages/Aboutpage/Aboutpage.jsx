// reference: https://www.shecodes.io/athena/261833-how-to-display-hello-world-inside-a-box-using-react#google_vignette
import React from "react";

export default function AboutPage() {
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
          marginTop: "10px",
        }}
      >
        <h1>Cortexi </h1>
        <br></br>
        {/* <img
          src="https://p.turbosquid.com/ts-thumb/oL/1Rz1Gg/GQr0EcBV/neuronsx/jpg/1389385522/300x300/sharp_fit_q85/741004d5239494af550d66ed767fcc342f1666fc/neuronsx.jpg" */}
          {/* style={{
            borderRadius: "10%",
            width: "600px",
            height: "210px",
            align: "center",
          }}
        ></img> */}
        <h2>About Cortexi</h2>
        <p style={{ textAlign: "left" }}>
          {" "}
          <b>Cortexi</b> is a cognitive health app designed to help you
          understand, track, and improve your brain function over time. We begin
          with a baseline assessment using the Stroop Effect, a proven
          psychological test that measures your attention, processing speed, and
          mental flexibility.<br></br> Based on your results, Cortexi helps
          determine your current cognitive strengths and areas for improvement,
          setting you on a personalized path to better brain health. Whether
          you're looking to sharpen your focus, boost memory, or simply stay
          mentally sharp, Cortexi is your starting point.
          <br></br>
          <br></br>
          <b>Did you know?</b>
          <br></br>
          Cognitive decline can begin as early as your 30s—but regular mental
          exercises can delay it significantly. Over 55 million people worldwide
          live with dementia, and that number is expected to nearly double every
          20 years.
          <br></br>Just <b>15 minutes</b> a day of focused brain training can
          lead to noticeable improvements in memory and processing speed.
          Cognitive assessments like the Stroop Test are used in clinical,
          military, and academic settings to evaluate executive function.
        </p>
      </div>
      <br></br>
    </div>
  );
}
