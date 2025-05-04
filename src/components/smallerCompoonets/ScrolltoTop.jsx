import { useEffect } from "react";

function ScrolltoTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return null;
}

export default ScrolltoTop;
