import Footer from "../smallerCompoonets/footer";
import imgone from "../../assets/FLYERS/IMG_2974.PNG";
import imgthree from "../../assets/FLYERS/IMG_2971.PNG";
import imgfour from "../../assets/im2.jpeg";
import imgfive from "../../assets/THE HELPING HANDS 1ST EDITION/IMG_2532.jpg";
import ScrolltoTop from "../smallerCompoonets/ScrolltoTop";
import NavigationHeader from "../smallerCompoonets/navigationheader";
import "../../styles/about.css";
import Aos from "aos";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="about_container">
        <ScrolltoTop />
        <NavigationHeader title={"About us"} navName={"About"} />

        {/* about contaunt section */}
        <section className="about_content">
          <h2 className="!text-[#2a152f]">Who We Are</h2>
          <div className="vision_mission_container phoneL:flex-col">
            {/* vision container */}
            <div className="vision_container container_box phoneL:!w-full">
              <div className="img_container ">
                <img data-aos="zoom-in" src={imgone} alt="Placeholder Image" />
              </div>
              <div className="text_container">
                <h2 className="!text-[#2a152f]">Our Vision</h2>
                <p>
                  Our vision is to change and transform the lives of the less
                  privileged.
                </p>
              </div>
            </div>
            {/* mission conainter */}
            <div className="mission_container container_box  phoneL:!w-full">
              <div className="img_container">
                <img
                  data-aos="zoom-in"
                  src={imgthree}
                  alt="Placeholder Image"
                />
              </div>
              <div className="text_container">
                <h2 className="!text-[#2a152f]">Our Mission</h2>
                <p>
                  This is a Christian based foundation which was built by the
                  leading of the Holy Spirit and by people who are bent on
                  helping and changing the lives of the less privileged around
                  us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  posterimg*/}
        <section
          style={{
            background: `url(${imgfour})`,
          }}
          className="helping-hand relative "
        >
          {" "}
          <span className=" absolute inset-0 bg-gradient-to-b from-[#2a152f] to-white opacity-50 backdrop-blur-xl  "></span>
        </section>
        {/* voluteerposter image */}
        <section className="volunteer_postercontainer">
          <div className="volunteer_poster_text_container">
            <div className="volunteer_poster_text">
              <h2 data-aos="fade-up" className="!text-[#2a152f]">
                Take the First step Today
              </h2>
              <p data-aos="fade-down">
                Joining The PUSH Foundation can also be a great way to meet
                like-minded individuals who share your passion for serving
                others and making the world a better place.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFupSlYU2qTdY2a1A28Vjy4eLJkhkHZunyRzY3Gr_Ry41emA/viewform?vc=0&c=0&w=1&flr=0&pli=1"
                target="_blank"
              >
                <button
                  data-aos="fade-right"
                  className="btn btn_volunteer !bg-[#2a152f] text-white"
                >
                  Volunteer Now
                </button>
              </a>
            </div>
          </div>
          <div className="volunteer_poster w-full !h-[23rem] laptop:!h-[20rem] tablet:!h-[17rem] ">
            <div className="w-full h-full rounded-md !overflow-hidden">
              <img
                data-aos="zoom-in"
                src={imgfive}
                alt="Placeholder Image"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default About;
