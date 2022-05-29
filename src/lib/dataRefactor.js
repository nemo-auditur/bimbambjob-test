const dataRefactor = (data) => {
  let refactoredData = {};
  const dataToArray = data.split("\n");
  refactoredData = {
    dimensions: {
      rows: parseInt(dataToArray[0].charAt(0)),
      columns: parseInt(dataToArray[0].charAt(1)),
    },
    mowers: [
      {
        position: {
          rows: parseInt(dataToArray[1].charAt(0)),
          columns: parseInt(dataToArray[1].charAt(1)),
          orientation: dataToArray[1].charAt(3),
        },
        roadMap: dataToArray[2],
        moving: true,
      },
      {
        position: {
          rows: parseInt(dataToArray[3].charAt(0)),
          columns: parseInt(dataToArray[3].charAt(1)),
          orientation: dataToArray[3].charAt(3),
        },
        roadMap: dataToArray[4],
        moving: false,
      },
    ],
    tourDone: false,
  };
  return refactoredData;
};

export default dataRefactor;
