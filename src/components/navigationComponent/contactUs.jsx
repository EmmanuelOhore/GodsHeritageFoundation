import NavigationHeader from "../smallerCompoonets/navigationheader";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import ScrolltoTop from "../smallerCompoonets/ScrolltoTop";
import logo from "../../assets/LOGO/logo2.png";
import img from "../../assets/ANNIVERSARY/IMG_3010.JPG";
import Footer from "../smallerCompoonets/footer";
import Aos from "aos";
import "../../styles/contactus.css";

const ContactUs = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  // animate on scroll logic
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  // the email logic
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0gzqfg9",
        "template_lys7ycl",
        form.current,
        "zos4rW-NzM0sJzZmu"
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully!", result);
          form.current.reset(); // clear the form
          setTimeout(() => {
            setStatusMessage(null);
          }, 3000);
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again.", error);
        }
      );
  };

  return (
    <>
      <div className="contactus_conatner">
        <ScrolltoTop />
        <NavigationHeader title={"Contact Us"} navName={"Contact Us"} />
        {/* coatct us header */}
        <section className="contactus_content">
          <h2 className="!text-[#2a152f]">Let’s start a conversation</h2>
          <h4>
            Leave us a message and we’ll get back to you as soon as possible
          </h4>
        </section>
        {/* conactact us form  */}
        <section className="contactus_form_container">
          <form className="contactus_form" ref={form} onSubmit={sendEmail}>
            <div className="inputBox">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="title">Subject</label>
              <input
                type="text"
                name="title"
                placeholder="Enter the subject"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                required
              />
            </div>
            <button className="btn btn_submit !bg-[#2a152f] text-white">
              Submit
            </button>
            {statusMessage && (
              <p style={{ marginTop: "1rem", color: "#2a152f" }}>
                {statusMessage}
              </p>
            )}
          </form>
        </section>

        {/* constact us section poster  */}
        <section className="contactus_poster gap-8">
          <div className="contactus_poster_img_conatiner  ">
            <div className=" h-60 ml-auto">
              <img
                data-aos="zoom-in"
                src={img}
                alt="Placeholder Image"
                className=" w-full h-full object-cover  "
              />
            </div>
          </div>

          <div className="contactus_poster_text ">
            <div className="contactus_poster_text_content">
              <header className="logo_container">
                <div className="img-container !w-[3rem]  phoneL:!w-[2rem] phoneP:!w-[3rem] phoneP:!h-[3rem] ">
                  <img
                    src={logo}
                    alt="Placeholder Image"
                    className="object-cover w-full h-full phoneP:object-contain "
                  />
                </div>
                <h1 className="!text-[15px]  phoneP:hidden">
                  Gods Heritage Foundation
                </h1>
              </header>
              <div className="contactus_poster_textp_container">
                <p data-aos="fade-down">
                  <span className="bold !text-[#2a152f]">Phone: </span>
                  +2348135877412{" "}
                </p>
                <p data-aos="fade-up">
                  <span className="bold !text-[#2a152f]">Email: </span>
                  foundationofgodsheritage@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
