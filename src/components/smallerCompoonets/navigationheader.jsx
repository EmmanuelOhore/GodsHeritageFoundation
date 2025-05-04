import { Link } from "react-router-dom";
const NavigationHeader = ({ title, navName }) => {
  return (
    <section className="about_head_content">
      <h2>{title}</h2>
      <div className="navigation">
        <Link to="/">Home </Link>
        <h2> &gt; {navName} </h2>
      </div>
    </section>
  );
};

export default NavigationHeader;
