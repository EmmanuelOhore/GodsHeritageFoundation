import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Aos from "aos";
// components
import Footer from "../smallerCompoonets/footer";
import ScrolltoTop from "../smallerCompoonets/ScrolltoTop";
import Background from "../smallerCompoonets/Background";
// images
import whoweare from "../../assets/FLYERS/IMG_2971[1].PNG";
import imgtwo from "../../assets/ORPHANAGE VISITS/IMG_2485.JPG";
import imgthree from "../../assets/ORPHANAGE VISITS/IMG_2485.JPG";
import InitiativeBox from "../smallerCompoonets/intitativeBox";
import education from "../../assets/MEDICAL AWARENESS/IMG_2486.JPG";
import medical from "../../assets/WORLD FOOD DAY/IMG_2497.JPG";
import smile from "../../assets/WORLD FOOD DAY/IMG_2496.JPG";
import helping from "../../assets/THE HELPING HANDS 1ST EDITION/IMG_2469.JPG";

import weneedhelp from "../../assets/FLYERS/IMG_2502.JPG";
// styles
import "../../styles/home.css";

const Home = () => {
  const whoweareRef = useRef(null);
  const whatweDoRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "#who-we-are" && whoweareRef.current) {
      whoweareRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#what-we-do" && whatweDoRef.current) {
      whatweDoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="home_container">
      <ScrolltoTop />

      {/* section home content */}
      <section className="home_content relative">
        <Background />
        <h1 className="!text-white">We Are Touching Lives in Africa</h1>
        <div className="btn_container">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFupSlYU2qTdY2a1A28Vjy4eLJkhkHZunyRzY3Gr_Ry41emA/viewform?vc=0&c=0&w=1&flr=0&pli=1"
            target="_blank"
          >
            <button className="btn btn_join-us text-white  ">Join us</button>
          </a>
          <Link to="/donate">
            <button className="btn btn_donate  text-white">Donate Now</button>
          </Link>
        </div>
      </section>
      {/* section who we are  */}
      <section
        ref={whoweareRef}
        id="who-we-are"
        className="who_we_are tablet:mt-10"
      >
        <h2 className="!text-[#2a152f]">Who We Are</h2>
        <div className="who_we_are_content tablet:flex-col-reverse">
          <div className="who_we_are_text">
            <p>
              Mishpacha God’s Heritage Foundation is a registered
              Christian-based non-profit organization under the Corporate
              Affairs Commission (CAC). We are dedicated to uplifting the less
              privileged in our communities. Our foundation is committed to
              transforming lives by fostering a community rooted in compassion,
              faith, and service.
            </p>
            <p>
              Driven by the conviction that every individual has a purpose
              ordained by God, we strive to help people fulfill their divine
              potential. As a collective, we embrace our identity as a family
              united in our mission to make a meaningful difference, ensuring
              that no one is forgotten.
            </p>
            <button
              onClick={() => navigate("/about")}
              data-aos="fade-up"
              className="btn btn_learn-more   !bg-[#2a152f] text-white"
            >
              Learn More
            </button>
          </div>
          <div className="who_we_are_img  ">
            <div className="  w-full h-full ">
              <img
                data-aos="zoom-in"
                src={whoweare}
                alt="Placeholder Image"
                className="w-full h-full object-cover !rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* aside content */}
      <section className="aside_main_container tablet:!h-auto tablet:!mt-20 ">
        <div className="aside_content laptop:!w-[90%] tablet:flex-col-reverse tablet:!static tablet:!w-full tablet:!translate-x-0 ">
          <div className="aside_text tablet:!w-full">
            <h2 data-aos="fade-up">Lets Keep Pushing</h2>
            <div data-aos="fade-down" className="aside_line">
              <p>
                We are called to touch lives, with the mission of eradicating
                poverty in Africa.
              </p>
              <p>
                We believe a single action can make a difference in the
                community and that collective actions can greatly impact the
                world.
              </p>
              <p>Let’s keep PUSHing!</p>
            </div>
          </div>
          <div className="aside_img w-[60%]  h-[30rem] laptop:!h-[20rem] tablet:!w-full phoneL:!h-[40%]">
            <img
              data-aos="zoom-in"
              className="w-full h-full object-cover object-top !rounded-md"
              src={imgtwo}
              alt="placehilder"
            />
          </div>
        </div>
      </section>

      {/* mission section  */}
      <section
        className="our-mission tablet:!mt-20 phoneL:!m-10 phoneL:!mx-4"
        ref={whatweDoRef}
        id="what-we-do"
      >
        <h2 data-aos="fade-up" className="!text-[#2a152f]">
          WHAT WE DO
        </h2>
        <div className="content-flex phoneL:!w-full">
          <div data-aos="fade-right" className="content-item">
            <h3>Community Outreach</h3>
            <p>
              We organize programs that provide essential resources, education,
              and support to underprivileged individuals and families.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="content-item"
          >
            <h3>Empowerment Programs</h3>
            <p>
              Our foundation focuses on empowering individuals to become
              self-sufficient, encouraging them to uplift others in their
              communities.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="content-item"
          >
            <h3>Gospel Sharing</h3>
            <p>
              During our outreach efforts, we share the gospel and provide
              spiritual encouragement, helping individuals connect with their
              faith and purpose.
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/Intiatives")}
          data-aos="fade-down"
          className="btn btn_READ  !bg-[#2a152f] text-white"
        >
          Read More
        </button>
      </section>

      {/* Helping hand section */}
      <section
        style={{
          background: `url(${imgthree}) no-repeat `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="helping-hand relative"
      >
        <span className=" absolute inset-0 bg-gradient-to-b from-[#2a152f] to-white opacity-50 backdrop-blur-xl  "></span>
        <div
          data-aos="fade-right"
          className="helping-hand_content !flex flex-col justify-center !py-10 phoneL:!py-5 phoneL:!mx-auto phoneL:!px-3 "
        >
          <div className="helping-hand_text">
            <h2
              data-aos="fade-up-right"
              className="phoneL:!text-base phoneL:!w-full"
              data-aos-delay="200"
            >
              Provide a Helping Hand
            </h2>
            <p data-aos="fade-down-left">
              We cant make it alone .We need your help, Your small help can
              bring a big change
            </p>
          </div>
          <Link to="/donate">
            <button
              data-aos="fade-down"
              className="btn btn_helping_donate phoneL:!mt-4"
            >
              Donate Now
            </button>
          </Link>
        </div>
      </section>

      {/*initiatives section  */}
      <section className="initiatives_container">
        <h2 className="!text-[#2a152f]">Initiatives</h2>
        <div className="initiatives_content tablet:!grid tablet:!grid-cols-2">
          <InitiativeBox
            delay={"0"}
            img={helping}
            header={"The Helping Hands Initiative"}
          />
          <InitiativeBox
            delay={"200"}
            img={smile}
            header={"The Smile of a Hundred"}
          />
          <InitiativeBox
            delay={"400"}
            img={education}
            header={"Empowerment Through Education"}
          />
          <InitiativeBox
            delay={"600"}
            img={medical}
            header={"Medical Outreach/Awareness"}
          />
        </div>
      </section>

      {/* voolumteer section  */}
      <section className="volunteer_container">
        <div className="volunteer_content">
          <div className="volunteer_text">
            <div className="volunteer_line">
              <h2 data-aos="fade-up" className="!text-[#2a152f]">
                We need you and your help
              </h2>
              <p data-aos="fade-down">
                We are always looking for passionate individuals to join our
                cause. Whether you have time, skills, or resources to offer, we
                welcome your support.
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
          <div className="volunteer_img p-4">
            <div className="w-full h-full">
              <img
                data-aos="zoom-in"
                className="!w-full !h-full object-cover object-top !rounded-md"
                src={weneedhelp}
                alt="Placeholder Image"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
