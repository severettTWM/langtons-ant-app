const Status = {
  OK: 200,
};

export const getShapeList = async (onSuccess) => {
  try {
    const url = 'http://localhost:5295/Shapes'

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

export const getColorSequenceList = async (onSuccess) => {
    try {
      const url = 'http://localhost:5295/ColorSequences'
  
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
  