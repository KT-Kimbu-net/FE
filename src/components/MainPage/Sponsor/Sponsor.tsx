"use client";

import Image from "next/image";
import sponsor from "@/img/Sponsor/sponsor1.svg";
import sponsor2 from "@/img/Sponsor/sponsor2.svg";
import sponsor3 from "@/img/Sponsor/sponsor3.svg";
import sponsor4 from "@/img/Sponsor/sponsor4.svg";
import sponsor5 from "@/img/Sponsor/sponsor5.svg";
import sponsor6 from "@/img/Sponsor/sponsor6.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Sponsor() {
  const sponsorImageStyle = "w-40";
  return (
    <section className="w-full py-4">
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        customTransition="transform 1000ms linear"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        <section className="flex justify-center cursor-pointer">
          <Image src={sponsor} alt="sponsor" className={sponsorImageStyle} />
        </section>
        <section className="flex justify-center cursor-pointer">
          <Image src={sponsor2} alt="sponsor" className={sponsorImageStyle} />
        </section>
        <section className="flex justify-center cursor-pointer">
          <Image src={sponsor3} alt="sponsor" className={sponsorImageStyle} />
        </section>
        <section className="flex justify-center cursor-pointer">
          <Image src={sponsor4} alt="sponsor" className={sponsorImageStyle} />
        </section>
        <section className="flex justify-center cursor-pointer">
          <Image src={sponsor5} alt="sponsor" className={sponsorImageStyle} />
        </section>
        <section className="flex justify-center cursor-pointer">
          <Image src={sponsor6} alt="sponsor" className={sponsorImageStyle} />
        </section>
      </Carousel>
    </section>
  );
}
