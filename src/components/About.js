import React from "react";
import BackgroundImg from "./sources/homeBg.jpg";
import NavBar from "./NavBar";

export default function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <div className="container">
        <h1 className="text-white">About</h1>
        <p className="mt-5 text-white">
          Welcome to ThaniUlagam! ThaniUlagam is a unique and imaginative space
          where reality meets the realm of the impossible. Here, we embrace the
          absurd, the whimsical, and the fantastical, offering a platform to
          share those outlandish opinions and ideas that defy conventional
          thinking. ThaniUlagam was created with a touch of sarcasm and a
          sprinkle of creativity. It’s a place for you to let your imagination
          run wild and share thoughts that you wish could come true but are,
          quite frankly, beyond the realm of possibility. Whether it’s the most
          outlandish political reform, a completely implausible scientific
          breakthrough, or simply a playful twist on everyday life, ThaniUlagam
          is your canvas.
        </p>
      </div>
    </div>
  );
}
