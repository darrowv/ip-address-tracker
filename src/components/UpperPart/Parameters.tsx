import "./Parameters.scss";

const Parameters = () => {
  return (
    <section className="parameters">
      <ul>
        <li className="parameters__item">
          <h3 className="item__title">IP ADDRESS</h3>
          <p className="item__data">192.22387.233.32</p>
        </li>
        <li className="parameters__item">
          <h3 className="item__title">LOCATION</h3>
          <p className="item__data">Brooklyn, NY 10001</p>
        </li>
        <li className="parameters__item">
          <h3 className="item__title">TIMEZONE</h3>
          <p className="item__data">UTC -05:00</p>
        </li>
        <li className="parameters__item">
          <h3 className="item__title">ISP</h3>
          <p className="item__data">SpaceX Starlink</p>
        </li>
      </ul>
    </section>
  );
};

export default Parameters;
