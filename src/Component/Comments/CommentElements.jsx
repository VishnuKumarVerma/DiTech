import styles from "./CommentElements.module.css";
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import img1 from "../../assets/profile-1.png";
import img2 from "../../assets/profile-2.png";
import img3 from "../../assets/profile-3.png";
import img4 from "../../assets/profile-4.png";
import Ratings from "./Ratings";
import Para from "./Para";
import Profile from "./Profile";

function CommentElements() {
  const commentData = [
    {
      para: "Curabitur viverra nulla felis. Donec ex massa, sagittis vel odio nec, pulvinar euismod metus. Praesent finibus at dolor at posuere. Curabitur ex urna, tincidunt in nulla at, blandit sodales enim. Quisque egestas ac odio quis vestibulum. Phasellus lobortis ipsum ut est convallis tristique. Ut quis aliquet sapien. Donec sollicitudin mauris a velit bibendum fermentum. Pellentesque eget suscipit ligula. Donec consectetur tincidunt lobortis. Integer a lacinia risus.",
      profileImg: img1,
      name: "Person 1",
      bio: "Founder",
    },
    {
      para: "Vestibulum vestibulum, dolor eget rutrum vulputate, purus erat ullamcorper tellus, non finibus ante lectus sed felis. Duis non turpis viverra, efficitur urna ut, ultrices ipsum. Integer eu dolor blandit, egestas tortor a, varius odio. In luctus risus ac ante placerat, ac fringilla velit mattis. Sed turpis ante, malesuada sit amet porttitor non, gravida quis eros. Nunc viverra tincidunt vehicula. Nullam iaculis laoreet pellentesque. Quisque vitae ex sit amet libero pretium efficitur.",
      profileImg: img2,
      name: "Person 2",
      bio: "Founder",
    },
    {
      para: "Ut maximus, nibh sed luctus luctus, justo augue dictum justo, ut congue nisi mauris vitae eros. Donec tempor scelerisque urna ut pretium. Vestibulum non risus sed lectus elementum imperdiet. Curabitur fringilla lacus velit. Suspendisse ultricies gravida luctus. In lacinia tortor vel facilisis lobortis. Vestibulum luctus diam in accumsan fermentum. Praesent non scelerisque metus. Quisque vitae augue at turpis congue pulvinar vitae eget elit.",
      profileImg: img3,
      name: "Person 3",
      bio: "Founder",
    },
    {
      para: "Vestibulum vestibulum, dolor eget rutrum vulputate, purus erat ullamcorper tellus, non finibus ante lectus sed felis. Duis non turpis viverra, efficitur urna ut, ultrices ipsum. Integer eu dolor blandit, egestas tortor a, varius odio. In luctus risus ac ante placerat, ac fringilla velit mattis. Sed turpis ante, malesuada sit amet porttitor non, gravida quis eros. Nunc viverra tincidunt vehicula. Nullam iaculis laoreet pellentesque. Quisque vitae ex sit amet libero pretium efficitur.",
      profileImg: img4,
      name: "Person 4",
      bio: "Founder",
    },
  ];

  return (
    <div className={styles.CommentElementsClass}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={200} // Add padding between slides
        loop={true} // Enable infinite loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {commentData.map((items, index) => (
          <div key={`comment_${index}`}>
            <SwiperSlide className={styles.card}>
              <Ratings />
              <Para commentPara={items.para} />
              <Profile
                commentProfileImg={items.profileImg}
                commentName={items.name}
                commentBio={items.bio}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default CommentElements;
