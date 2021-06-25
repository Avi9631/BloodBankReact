import React from 'react'
import image from './images/slider/banner.jpg' 
import './App.css'


function Slider() {
    return (
        <div>

            <div className="slider-detail">

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={image} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className=" bounceInDown">Donate Blood & Save a Life</h5>
                                <p className=" bounceInLeft">To give blood you need neither extra strength nor extra food, and you will save a life. <br/>If you're a blood donor, you're a hero to someone, somewhere, who received your gracious gift of life. <br/> A bottle of blood saved my life, was it yours. <br/> Every blood donor is a life saver.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Slider
