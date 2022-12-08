import Parameters from './Parameters';
import Search from './Search';
import "./index.scss";

// @ts-ignore
const UpperPart = () => {

  return (
    <section className='upper-part'>
      <h1>IP Address Tracker</h1>
      <Search />
      <Parameters />
    </section>
  );
};

export default UpperPart;