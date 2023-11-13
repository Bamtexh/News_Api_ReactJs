import React from 'react'
import Reading_News from "./Component/Assets/Reading_News.svg"
import '../src/App.css'

const Hero = () => {
  return (
         <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 text-lg-start text-sm-center">
              <h1 className="mb-4 display-4 fw-bold">Have You <br></br>Read News Today?</h1>
              <p className=" mb-4">
              Stay informed with the latest news from around the world. Our news API provides up-to-date news articles from a variety of sources, so you can stay on top of the latest developments in politics, business, sports, and more.
              </p>
              <a href="#" className="btn Hero-btn">Get Started</a>
            </div>
            <div className="col-md-5">
              <img src={Reading_News} alt="Illustration" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero