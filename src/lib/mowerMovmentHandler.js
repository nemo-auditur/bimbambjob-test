export const mowerMovementhandler = (data) => {
  // Constants for the boundaries of the field and differents directions
  const GRID_LIMITS = [data.dimensions.rows, data.dimensions.columns];
  const directions = ["N", "W", "S", "E"];
  // handle wich mower need to be moved
  let indexMower = data.mowers[0].moving === true ? 0 : 1;
  // variables to make code readable
  const dataRow = data.mowers[indexMower].position.rows;
  const dataColumns = data.mowers[indexMower].position.columns;
  const dataOrientation = data.mowers[indexMower].position.orientation;
  const dataCopy = { ...data };
  const currentPosition = directions.indexOf(dataOrientation);
  let nextIndex;

  // Stop the mower when her roadMap is done
  // and make the other moving
  if (
    data.mowers[indexMower].roadMap.length === 0 &&
    indexMower === data.mowers.length - 1
  ) {
    dataCopy.tourDone = true;
    return dataCopy;
  } else if (
    data.mowers[indexMower].roadMap.length === 0 &&
    indexMower !== data.mowers.length - 1
  ) {
    dataCopy.mowers[indexMower].moving = false;
    dataCopy.mowers[indexMower + 1].moving = true;
    return dataCopy;
  } else {
    dataCopy.mowers[indexMower].moving = true;
  }

  // Handle the 3 different ways of moving
  switch (data.mowers[indexMower].roadMap.charAt(0)) {
    case "F":
      if (dataOrientation === "N" && dataRow !== GRID_LIMITS[1]) {
        dataCopy.mowers[indexMower].position.rows = dataRow + 1;
      } else if (dataOrientation === "S" && dataRow !== 0) {
        dataCopy.mowers[indexMower].position.rows = dataRow - 1;
      } else if (dataOrientation === "E" && dataColumns !== GRID_LIMITS[0]) {
        dataCopy.mowers[indexMower].position.columns = dataColumns + 1;
      } else if (dataOrientation === "W" && dataRow !== 0) {
        dataCopy.mowers[indexMower].position.columns = dataColumns - 1;
      } else {
        dataCopy.mowers[indexMower].roadMap =
          dataCopy.mowers[0].roadMap.slice(1);
        return dataCopy;
      }
      break;
    case "L":
      nextIndex = (currentPosition + 1) % directions.length;
      dataCopy.mowers[indexMower].position.orientation = directions[nextIndex];
      break;
    case "R":
      if (currentPosition - 1 < 0) {
        nextIndex = directions.length - 1;
      } else {
        nextIndex = (currentPosition - 1) % directions.length;
      }
      dataCopy.mowers[indexMower].position.orientation = directions[nextIndex];
      break;
    default:
      return data;
  }
  dataCopy.mowers[indexMower].roadMap =
    dataCopy.mowers[indexMower].roadMap.slice(1);

  return dataCopy;
};
