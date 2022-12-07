import Parameters from './Parameters';
import Search from './Search';
import "./index.scss"

// @ts-ignore
const UpperPart = ({ getLocationTwo }) => {

  const getLocationOne = (location: String) => {
    getLocationTwo(location);
  }

  return (
    <section className='upper-part'>
      <h1>IP Address Tracker</h1>
      <Search getLocationOne={getLocationOne} />
      <Parameters />
    </section>
  );
};

export default UpperPart;