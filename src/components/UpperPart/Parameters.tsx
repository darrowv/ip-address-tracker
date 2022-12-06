import "./Parameters.scss";

const Parameters = () => {
  return (
    <section className="parameters">
      <div className="ip-address">
        <h3 className="ip-address__title">IP ADDRESS</h3>
        <p className="ip-address__data">192.22387.233.32</p>
      </div>
      <div className="location">
        <h3 className="location__title">LOCATION</h3>
        <p className="location__data">Brooklyn, NY 10001</p>
      </div>
      <div className="timezone">
        <h3 className="timezone__title">TIMEZONE</h3>
        <p className="timezone__data">UTC -05:00</p>
      </div>
      <div className="isp">
        <h3 className="isp__title">ISP</h3>
        <p className="isp__data">SpaceX Starlink</p>
      </div>
    </section>
  );
};

export default Parameters;
