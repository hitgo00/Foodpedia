import React from 'react';
import img from "../../images/about.png";
import img2 from "../../images/about2.png";
export default function About() {
    return (
        <div id="about">
            <div className="about-text">
            <div className="about2">
                <img src={img2} alt=''/>
            </div>
                <h1>Project Summary</h1>
                <p>
                On the platform, users can search for a food item’s nutritional content (calorie density, vitamins, carbs, and fat content, etc) via image and text(keyword) search.
                Users will also be able to add food items to their food journals to keep a track of calorie intake.

                    
                </p>
            </div>    

            <div className="about-image">
                <img src={img} alt=''/>
            </div>
        </div>
    )
}
