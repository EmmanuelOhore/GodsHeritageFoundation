import logo from "../../assets/LOGO/logo2.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/god_heritage_foundation/profilecard/?igsh=NGN0ZjB2azB4b2s0",
      iconClass: "fa-brands fa-instagram",
      delay: "0",
    },
    {
      href: "https://x.com/_GHF_Foundation",
      iconClass: "fa-brands fa-x-twitter",
      delay: "200",
    },
    {
      href: "https://www.facebook.com/share/17qXsTjHaN/?mibextid=LQQJ4d]",
      iconClass: "fa-brands fa-facebook",
      delay: "400",
    },
    {
      href: "https://www.linkedin.com/company/mishpacha-god-s-heritage-foundation/",
      iconClass: "fa-brands fa-linkedin text-[#0077b5]",
      delay: "600",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <footer>
        <div className="footer_content">
          <div className="footer_text_container">
            <header className="logo_container">
              <div className="img-container !w-[3rem]  phoneL:!w-[2rem] phoneP:!w-[4rem] phoneP:!h-[3rem] ">
                <img
                  src={logo}
                  alt="Placeholder Image"
                  className="object-cover phoneP:object-contain"
                />
              </div>
              <h1 className="!text-[15px] text-white phoneP:hidden">
                Gods Heritage Foundation
              </h1>
            </header>
            <div className="footer_text">
              <p data-aos="fade-up">
                We are always looking for passionate individuals to join our
                cause. Whether you have time, skills, or resources to offer, we
                welcome your support.
              </p>
            </div>
            <div className="footer_links_container">
              <h3>Follow us:</h3>
              <div className="footer_links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      data-aos="fade-right"
                      data-aos-offset="50"
                      data-aos-delay={link.delay}
                      className={link.iconClass}
                    ></i>
                  </a>
                ))}
              </div>
            </div>
            ;
          </div>
          {/* link s container */}
          <div className="footer_content_links_container">
            <div className="footer_content_section_Container">
              <div className="footer_content_section">
                <Link to={"/#who-we-are"} className="w-[50%] text-start">
                  <h3 className="!w-full">Who we Are</h3>
                </Link>
                <Link className=" w-[50%]" to="/Gallery">
                  <h3 className="!w-full">Gallery</h3>
                </Link>
              </div>
              <div className="footer_content_section">
                <Link to={"/#what-we-do"} className="w-[50%] text-start">
                  <h3 className="!w-full">What we Do</h3>
                </Link>
                <Link className=" w-[50%]" to="/Volunteer">
                  <h3 className="!w-full">Volunteer</h3>
                </Link>
              </div>

              <div className="footer_content_section">
                <Link className=" w-[50%]" to="/Contactus">
                  <h3 className="!w-full">Contacts</h3>{" "}
                </Link>

                <Link className=" w-[50%]" to="/about">
                  <h3 className="!w-full">About</h3>
                </Link>
              </div>
              <div className="footer_content_section"></div>
              <Link to="/donate">
                {" "}
                <button className="btn btn_donate">Donate</button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
