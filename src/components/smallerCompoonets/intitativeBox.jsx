import Aos from "aos";
import { useEffect } from "react";

const InitiativeBox = ({ img, header, delay }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-left"
        data-aos-delay={delay}
        className="intiatives_box tablet:!w-full"
      >
        <div className=" w-full h-64 phoneL:h-32 phoneP:h-38 ">
          <img
            src={img}
            alt="Placeholder"
            className="w-full h-full  object-cover"
          />
        </div>
        <div className="initiatives_text h-full bg-[#2a152f]">
          <h3 className="!text-[white]">{header}</h3>
        </div>
      </div>
    </>
  );
};

export default InitiativeBox;
