import './SportsMain.css'
import eagles from '../assets/images/eagles.png';
import flyers from '../assets/images/flyers.png';
import sixers from '../assets/images/76ers.png';
import phillies from '../assets/images/phillies.png';

function SportsMain() {
  return (
    <div className="flex flex-col w-full">
      <div className="menu bg-white py-10">
        <div className="menu_item">
          <a className="menu_item-link"> Sports </a>
          <div className="marquee">
            <div className="marquee_inner" aria-hidden="true">
              <span>Sports</span>
              <span>Sports</span>
              <span>Sports</span>
              <span>Sports</span>
              <span>Sports</span>
              <span>Sports</span>
              <span>Sports</span>
              <span>Sports</span>
              <span>Sports</span>
              <span>Sports</span>
              <span>Sports</span>
            </div>
          </div>
        </div>
      </div>



      <div className="flex w-full py-10 justify-evenly">
        <div className="text-center">
          <img src={eagles} className="w-72 h-48"></img>
          <h1 className="text-xl font-bold p-2">Philadelphia Eagles</h1>
        </div>

        <div>
          <img src={flyers} className="w-48 h-48"></img>

          <h1 className="text-xl font-bold p-2"> Philadelphia Flyers</h1>
        </div>

        <div>
          <img src={sixers} className="w-48 h-48"></img>

          <h1 className="text-xl font-bold p-2"> Philadelphia 76ers</h1>
        </div>

        <div>
          <img src={phillies} className="w-48 h-48"></img>
          <h1 className="text-xl font-bold p-2"> Philadelphia Phillies</h1>
        </div>
      </div>
    </div>
  );
}

export default SportsMain;
