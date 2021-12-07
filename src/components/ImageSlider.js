import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import Container from "@mui/material/Container";

const ImageSlider = () => {
    const slideImages = [
        "/../public/assets/images/slide-1.jpeg",
        "/../public/assets/images/slide-2.jpeg",
        "/../public/assets/images/slide-3.jpeg",
    ];

    const fadeProperties = {
        duration: 3000,
        canSwipe: false,
    };

    return (
        <Container disableGutters maxWidth="full" component="main" >
            <div className="slide-container">
                <Slide {...fadeProperties}>
                    <div className="each-fade">
                        <div>
                            <Image src={slideImages[0]} alt="hi" width="1800" height="500" layout='responsive'/>
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <Image src={slideImages[1]} alt="hi" width="1800" height="500" layout='responsive'/>
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <Image src={slideImages[2]} alt="hi" width="1800" height="500" layout='responsive'/>
                        </div>
                    </div>
                </Slide>
            </div>
        </Container>
    );
};

export default ImageSlider;