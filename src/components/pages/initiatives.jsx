import NavigationHeader from "../smallerCompoonets/navigationheader";
import Footer from "../smallerCompoonets/footer";
import ScrolltoTop from "../smallerCompoonets/ScrolltoTop";
import { intiativeData } from "../../constant";
import Aos from "aos";
import { useState, useEffect } from "react";
import "../../styles/initiative.css";

const Initiatives = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const [current, setcurrent] = useState(null);
  const handleDropdown = (index) => {
    setcurrent((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="initiatives_section_container">
        <ScrolltoTop />
        <NavigationHeader title={"Initiatives"} navName={"Initiatives"} />
        <section className="initiatives_content_container">
          {/* box content styling */}
          {intiativeData.map((el, index) => {
            return (
              <div
                data-aos="fade-left"
                data-aos-delay={el.delay}
                key={index}
                className="intiatives_boxContent"
              >
                <div className="intiatives_boxContent_img_container !w-full h-64 phoneL:h-32 phoneP:h-44">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="800"
                    src={el.img}
                    alt="Placeholder Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="dropdown">
                  <div className="dropdown_content_header">
                    <h2>{el.title}</h2>
                    <i
                      onClick={() => handleDropdown(index)}
                      className={
                        current === index
                          ? "fa-solid  arrow fa-arrow-down"
                          : "fa-solid arrow fa-arrow-right"
                      }
                    ></i>
                  </div>

                  <div
                    className={`dropdown_content ${
                      current === index ? "visible" : "hidden"
                    }`}
                  >
                    <p>{el.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Initiatives;
