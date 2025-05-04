import NavigationHeader from "../smallerCompoonets/navigationheader";
import Footer from "../smallerCompoonets/footer";
import ScrolltoTop from "../smallerCompoonets/ScrolltoTop";
// import imgone from "../../assets/placeholder.png";
import Aos from "aos";
import { useEffect } from "react";
import { gallery } from "../../constant";
import "../../styles/gallery.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="gallery_container">
        <ScrolltoTop />
        <NavigationHeader title={"Gallery"} navName={"Initiatives"} />
        <section className="grid grid-cols-3  gap-4 p-[4rem] tablet:p-[2rem] phoneL:grid-cols-2 phoneP:grid-cols-1 phoneL:p-[1rem]">
          {gallery.map((el, index) => {
            return (
              <div
                data-aos="fade-down"
                key={index}
                className="w-full h-64 overflow-hidden rounded-lg shadow-md tablet:h-52 phoneL:h-44"
              >
                <img
                  className="w-full h-full object-cover object-top"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  src={el}
                  alt={`Gallery Image ${index + 1}`}
                />
              </div>
            );
          })}
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
