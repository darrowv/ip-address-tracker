import Parameters from './Parameters';
import Search from './Search';
import "./index.scss"

const UpperPart = () => {
  return (
    <div className='upper-part'>
      <h1>IP Address Tracker</h1>
      <Search />
      <Parameters />
    </div>
  );
};

export default UpperPart;