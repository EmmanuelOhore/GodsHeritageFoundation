import NavigationHeader from "../smallerCompoonets/navigationheader";
import imgtwo from "../../assets/THE SMILE OF A HUNDRED 1ST EDITION/IMG_2481.JPG";
import imgone from "../../assets/img1.webp";
import ScrolltoTop from "../smallerCompoonets/ScrolltoTop";
import Aos from "aos";
import Footer from "../smallerCompoonets/footer";
import "../../styles/volunteer.css";
import { useEffect } from "react";
const Volunteer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const volunteerReason = [
    {
      title: "Create Lasting Impact",
      delay: "0",
      explanation:
        ": Your involvement directly contributes to meaningful change. By volunteering, you empower individuals and families, helping them overcome challenges and achieve their potential.",
    },
    {
      title: "Experience Personal Growth",
      delay: "100",
      explanation:
        "Engaging in volunteer work fosters personal fulfillment and growth. Many of our volunteers report increased happiness, enhanced self-esteem, and a profound sense of purpose as they witness the positive effects of their contributions.",
    },
    {
      title: "Cultivate Meaningful Connections",
      delay: "200",
      explanation:
        "Join a vibrant community of compassionate individuals who share your commitment to service. Volunteering provides a unique platform to forge lasting friendships and network with like-minded people who are passionate about making a difference.",
    },
    {
      title: "Develop Valuable Skills",
      delay: "300",
      explanation:
        "Whether you seek to enhance existing skills or acquire new ones, our diverse volunteer opportunities offer hands-on experience in areas such as community outreach, education support, and health initiatives—skills that are invaluable in both personal and professional contexts.",
    },
    {
      title: "Align with a Noble Mission",
      delay: "400",
      explanation:
        "Become part of an organization that stands for social justice, compassion, and empowerment. Our foundation is dedicated to uplifting marginalized communities, allowing you to contribute to a cause that resonates deeply with your values.",
    },
    {
      title: "Flexible Engagement",
      delay: "500",
      explanation:
        "We understand the importance of balance in your life. Our volunteer roles are designed with flexibility in mind, enabling you to make a meaningful contribution while accommodating your personal schedule.",
    },
    {
      title: "Recognition and Appreciation",
      delay: "600",
      explanation:
        "Your efforts will not go unnoticed. We celebrate our volunteers through recognition programs and appreciation events, ensuring that you feel valued for the vital role you play in our mission.",
    },
  ];
  return (
    <>
      <div className="volunteerNav_container">
        <ScrolltoTop />
        <NavigationHeader title={"Volunteer"} navName={"Volunteer"} />
        <section className="volunteer_foundation_section phoneL:!mt-4">
          <div className="volunteer_foundation_container">
            <div className="volunteer_foundation_text">
              <div data-aos="fade-down" className="foundation_header_text">
                <h2 className="!text-[#2a152f]">
                  Join Us in Making a Difference!
                </h2>
                <p>
                  At Mishpacha God’s Heritage Foundation, our volunteers are the
                  heart of our mission. By joining our team, you can help uplift
                  the less privileged in our communities and make a lasting
                  impact.
                </p>
              </div>
              <div className="foundation_text_content">
                <h2 data-aos="fade-up" className="!text-[#2a152f]">
                  Why Volunteer with Mishpacha God’s Heritage Foundation?
                </h2>
                <ul className="foundation_reason_container">
                  {volunteerReason.map((el, index) => {
                    return (
                      <li
                        data-aos="fade-right"
                        data-aos-delay={el.delay}
                        key={index}
                        className="foundation_reason"
                      >
                        <p>
                          <span className="reason_point">{el.title}:</span>
                          {el.explanation}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="vounteer_founfation_img  h-full">
              <img
                data-aos="fade-left"
                className="volunteer_img rounded-md shadow-md h-full w-full"
                src={imgone}
                alt="Placeholder Image "
              />
            </div>
          </div>
        </section>
        {/* due note section */}
        <section className="volunteer_due_note_section">
          <div className="due_note_container">
            <i className="fa-solid fa-people-group animate-bounce !text-[#2a152f]"></i>
            <p data-aos="fade-down">
              Note: Due to the current global situation, we prioritize the
              health and safety of our volunteers and the communities we serve.
              We closely follow local health guidelines and take necessary
              precautions during all our activities.
            </p>
          </div>
        </section>

        {/* join_funfation section */}
        <section className="join_volunteer_container">
          <div className="join_volunteer_content px-4 tablet:!flex-col-reverse phoneL:px-2">
            <div className="join_volunteer_text tablet:!p-2">
              <div className="join_volunteer_line">
                <h2 data-aos="fade-up" className="!text-[#2a152f]">
                  BECOME A VOLUNTEER
                </h2>
                <p data-aos="fade-down">
                  To get started, simply complete our online application form,
                  indicating your preferred areas of interest and your
                  availability. Once we receive your application, our dedicated
                  team will reach out to discuss potential volunteer roles that
                  align with your interests and provide you with detailed
                  information about the onboarding process. We look forward to
                  welcoming you to our community of passionate volunteers!
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
            <div className="join_volunteer_img w-full   my-auto py-4 phoneL:py-2">
              <div className=" h-full w-full ">
                <img
                  data-aos="zoom-in"
                  className="join_volunteer_img w-full h-full rounded-md shadow-md object-cover "
                  src={imgtwo}
                  alt="Placeholder Image"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Volunteer;
