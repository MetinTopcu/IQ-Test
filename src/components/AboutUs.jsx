import React from "react";
import "../styles/AboutUs.css";
import { Link } from "react-router-dom";
import cylinder from "../images/cylinder.png";
import niakaigames from "../images/niakaigames.png";


function AboutMe() {
  // console.log("AboutUs");
  return (
    <div>
      <div className="aboutUsMain">
        <h2>What is IQ?</h2>
        <div>
          <p>
            The first IQ test was designed by Alfred Binet in 1904. By
            definition, the IQ was a test created to determine an individual's
            ability to make meaningful contributions to society. It was based
            off of simple pattern recognition, arithmetic, and other basic
            subjects that were limited to a scope which could be administered to
            school children. Our philosophy is that an online IQ test should be
            as scientifically accurate as possible. We are not affiliated with
            Jordan Peterson. This test was created using the methodology he has
            described on multiple occasions in a public forum. We believe the
            vast majority of experienced psychometric testing experts would
            agree this test is highly acurate.
          </p>
        </div>
        <div className="aboutUsContent">
          <div className="aboutUsContent1">
            <h2>Find Your IQ Score</h2>
            <p>
              Have you wondered what your IQ score is? The best free online IQ
              test will give you an accurate IQ score based on real science.
            </p>
          </div>
          <div className="aboutUsContent2">
            <h2>You and Your IQ</h2>
            <p>
              Although it is definitely not the only indicator of intelligence
              or success, a person's Intelligence Quotient (IQ) is often a
              strong indicator of relative intelligence to others measured. In
              life we strive to learn about ourselves and grow. We believe an IQ
              test can be a great way to kick-start the process of expanding
              your mind.
            </p>
          </div>
        </div>
        <h2>About Nia Kai Games</h2>
        <div className="aboutUsRealNiaKai">
        <div className="aboutUsNiaKai">
          <h2>Cylinder Of the Rings</h2>
          <p>Play Store Games</p>
          <Link to='https://play.google.com/store/apps/details?id=com.metin.ringsofcylinders'> <p>Cylinder of the Rings</p> </Link>
        </div>
        <div className="aboutUsNiaKai1">
          <h2>Eat Fish don't Eat Mine</h2>
          <p>Play Store Games</p>
          <Link to='https://play.google.com/store/apps/details?id=com.metin.oyuncalismasi'> <p>Eat Fish don't Eat Mine</p> </Link>
        </div>
        </div>
        <img className="imgClass" src={niakaigames} alt="" />
      </div>
    </div>
  );
}

export default AboutMe;
