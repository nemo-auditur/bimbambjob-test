// Imports
import mower from "../../../assets/mower.png";
import styled from "styled-components";

// Use of a styled component to make handle
// easily toe rotation of the mower
const MowerImg = styled.img`
  height: 90%;
  width: 90%;
  ${(props) => props.orientation};
`;

const Mower = ({ orientation }) => {
  // Function to handle the display of the mower
  // depending of the orientation

  const mowerOrientationDisplay = () => {
    // Make a mapping of the possible mower orientation's
    const cardinalDesign = {
      N: "transform:rotate(-90deg)",
      E: "transform:rotate(0deg)",
      W: "transform:rotate(-180deg)",
      S: "transform:rotate(90deg)",
    };

    const rotation = Object.keys(cardinalDesign).find((obj) => {
      return obj === orientation;
    });
    // render the mower with the right orientation
    return (
      <>
        <MowerImg
          src={mower}
          alt="a super mower"
          orientation={cardinalDesign[rotation]}
        />
      </>
    );
  };

  return <>{mowerOrientationDisplay()}</>;
};

export default Mower;
