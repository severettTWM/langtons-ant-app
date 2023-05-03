const Status = {
  OK: 200,
};

export const getCells = async (onSuccess, xDimension, yDimension, numberOfMoves) => {
  try {
    const url = `http://localhost:5271/Cells?xDimension=${xDimension}&yDimension=${yDimension}&numberOfMoves=${numberOfMoves}`

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data)
    if (response.status === Status.OK) {
      onSuccess(data);
    } else {
        console.log("error")
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);;
  }
};
  