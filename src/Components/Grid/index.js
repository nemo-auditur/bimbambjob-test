// general imports
import "./index.css";
// components imports
import Mower from "./Mower/index";

// generate a grid according to the data
// fetched at the launch of the App.
const Grid = ({ dimensions, mower }) => {
  return (
    <>
      <div className="gridContainer">
        {[...Array(dimensions.rows + 1)].map((_, row) => {
          return (
            <div key={row} className="rowContainer">
              {[...Array(dimensions.columns + 1)].map((_, column) => {
                // Handle the display of the mower in the right spot
                if (
                  mower &&
                  mower.position.rows === row &&
                  mower.position.columns === column
                ) {
                  return (
                    <span className="cells" key={column}>
                      <Mower orientation={mower.position.orientation} />
                    </span>
                  );
                }
                return <span className="cells" key={column}></span>;
              })}
            </div>
          );
        })}
      </div>
      <span className="northPoint">N</span>
      <span className="westPoint">W</span>
      <span className="eastPoint">E</span>
      <span className="southPoint">S</span>
    </>
  );
};

export default Grid;
