import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import Container from "@mui/material/Container";

const ImageSlider = () => {
    const slideImages = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
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
                            <Image src={slideImages[0]} alt="hi" width="1800" height="500" />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <Image src={slideImages[1]} alt="hi" width="1800" height="500" />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <Image src={slideImages[2]} alt="hi" width="1800" height="500" />
                        </div>
                    </div>
                </Slide>
            </div>
        </Container>
    );
};

export default ImageSlider;