import { useRef, useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import fullscreen_icon from "../../assets/fullscreen-icon.png";
import "./Parameters.scss";

const Parameters = () => {
  const { region, city, timezone, ip, isp, error } = useSelector(
    (state: RootState) => state.geo
  );
  const [hideSection, setHideSection] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const callBack = (entries: any) => {
    if (entries[0].isIntersecting) {
      if (entries[0].intersectionRatio <= 0.75) {
        setHideSection(true);
      } else if (entries[0].intersectionRatio >= 0.75) {
        setHideSection(false);
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
    <section
      className={`parameters ${hideSection ? "hidden" : null}`}
      ref={targetRef}
    >
      {error ? (
        <h1>Incorrect data or problem with API, try again with correct IP address or Domain name</h1>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
};

export default Parameters;
