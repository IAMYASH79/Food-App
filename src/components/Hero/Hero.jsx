import React from "react";
import bgImg from "../../assets/vector3.png";
import Food1 from "../../assets/briyani2.png";
import Food2 from "../../assets/briyani3.png";
import Food3 from "../../assets/briyani5.png";

const ImageList = [
  {
    id: 1,
    img: Food1,
  },
  {
    id: 2,
    img: Food2,
  },
  {
    id: 3,
    img: Food3,
  },
];

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%"
    height: "100%"

}

const Hero = () => {
    const[imageId, setImageId] = React.useState(Food1)
  return <>
  <div style={bgImage}
  className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
  style={bgImage}>
  </div>
   </>;
};

export default Hero;
