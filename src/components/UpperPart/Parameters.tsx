import { useRef, useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import fullscreen_icon from "../../assets/fullscreen-icon.png";
import "./Parameters.scss";

const Parameters = () => {
  // @ts-ignore
  const { region, city, timezone, ip, isp } = useSelector((state) => state.geo);
  const targetRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  // @ts-ignore

  const callBack = (entries) => {
    if (entries[0].isIntersecting) {
      if (entries[0].intersectionRatio <= 0.75) {
        targetRef.current.classList.add("hidden");
        console.log("disappear");
        // console.log("now")
      } else if (entries[0].intersectionRatio >= 0.75) {
        targetRef.current.classList.remove("hidden");
        console.log("appear");
      }
    }
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    const currentTarget = targetRef.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  const sub = (str: String) => str.substring(0, 20) + "...";

  return (
    <section className="parameters" ref={targetRef}>
      <ul>
        <li>
          <h3>IP ADDRESS</h3>
          <p>{!ip ? "..." : ip}</p>
        </li>
        <hr />
        <li>
          <h3>LOCATION</h3>
          <p>{!region ? "..." : `${region}, ${city}`}</p>
        </li>
        <hr />
        <li>
          <h3>TIMEZONE</h3>
          <p>{!timezone ? "..." : timezone}</p>
        </li>
        <hr />
        <li>
          <h3>ISP</h3>
          <p>{!isp ? "..." : isp.length > 20 ? sub(isp) : isp}</p>
        </li>
      </ul>
      <div className="fullscreen">
        <span>⬇️</span>
        <img src={fullscreen_icon} alt="" />
      </div>
    </section>
  );
};

export default Parameters;
