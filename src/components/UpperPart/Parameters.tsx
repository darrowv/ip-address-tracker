import { useSelector } from "react-redux";
import "./Parameters.scss";

const Parameters = () => {
  // @ts-ignore
  const { region, city, timezone, ip, isp } = useSelector((state) => state.geo);

  const sub = (str: String) => str.substring(0, 10) + "...";

  return (
    <section className="parameters">
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
          <p>{!timezone ? "..." : "UTC " + timezone}</p>
        </li>
        <hr />
        <li>
          <h3>ISP</h3>
          <p>{!isp ? "..." : isp.length > 10 ? sub(isp) : isp}</p>
        </li>
      </ul>
    </section>
  );
};

export default Parameters;
