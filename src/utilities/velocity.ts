// A function to calculate velocity
const velocity = async (
  time1: number,
  time2: number,
  distance1: number,
  distance2: number
): Promise<number> => {
  try {
    const timeChange = time2 - time1;
    const distanceChange = distance2 - distance1;

    const result = distanceChange / timeChange;
    // await result;
    // console.log(result)
    return await result;
  } catch {
    console.log("error getting values");
    return null as unknown as number;
  }
};

export default velocity;
