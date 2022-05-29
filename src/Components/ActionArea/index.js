// General imports
import "./index.css";
// Lib import
import { mowerMovementhandler } from "../../lib/mowerMovmentHandler";

//display the result of mowers movements
const ActionArea = ({ data, callBack }) => {
  return (
    <div className="actionAreaContainer">
      <button
        onClick={() => {
          callBack(mowerMovementhandler(data));
        }}
      >
        Move the mower
      </button>
      {data.mowers.map((mower, index) => {
        if (mower.roadMap.length === 0) {
          return (
            <div key={index}>
              Final coordonates of lawn mower {index + 1}:{" "}
              <span>
                [{mower.position.columns} : {mower.position.rows},{" "}
                {mower.position.orientation}]
              </span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ActionArea;
