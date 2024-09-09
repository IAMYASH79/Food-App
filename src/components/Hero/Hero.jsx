import React from "react";
import bgImg from "../../assets/vector3.png";
import Food1 from "../../assets/biryani2.png";
import Food2 from "../../assets/biryani3.png";
import Food3 from "../../assets/biryani5.png";

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
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = React.useState(Food1);
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section   */}
            <div className="flex flex-col justify-center items-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to Foodie Zone
              </h1>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl from-neutral-100">
                Where Every Bite is a Delight
              </h3>
              <p className="text-sm">
                At Foodie Zone, we believe that dining is more than just a meal;
                it's an experience. Nestled in the heart of the city, our
                restaurant is a haven for food enthusiasts and casual diners
                alike. With a diverse menu crafted to tantalize every taste bud,
                we offer everything from gourmet delicacies to comforting
                favorites.
              </p>
            </div>
            {/* Image section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
