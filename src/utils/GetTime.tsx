export const GetTime = (timeStamp: number) => {
  const hour = new Date(timeStamp).getHours();
  const minute = new Date(timeStamp).getMinutes();

  return `${hour}:${minute}`;
};
