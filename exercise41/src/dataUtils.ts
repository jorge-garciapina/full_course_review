export const generateRandomData = (numPoints: number) => {
  return Array.from({ length: numPoints }, () =>
    Math.floor(Math.random() * 100)
  );
};

export const addPointsPeriodically = (
  updateDataPoints: (newDataPoints: number[]) => void,
  interval: number,
  pointsToAdd: number
) => {
  return setInterval(() => {
    const newPoints = generateRandomData(pointsToAdd);
    updateDataPoints(newPoints);
  }, interval);
};
