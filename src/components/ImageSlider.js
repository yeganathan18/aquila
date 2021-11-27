import Image from "next/image";
import styled from "@emotion/styled";
import Slider1 from "../../public/assets/images/slider-1.jpeg";

const ImageSliderStyle = styled.div`
    height: 50vh;
    width: 50vm;
`;

const ImageSlider = () => {
    return (
        <ImageSliderStyle>
            <div className="image-slider">
                <Image
                    src={Slider1}
                    alt="slider-1"
                    className="slider-image"
                    layout="responsive"
                />
            </div>
        </ImageSliderStyle>
    )
}

export default ImageSlider;