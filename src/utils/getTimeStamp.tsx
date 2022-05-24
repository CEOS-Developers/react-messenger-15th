export const getTimeStamp = (unixTime: number) => {
  const hour = new Date(unixTime).getHours();
  const minute = new Date(unixTime).getMinutes();

  return `${hour}:${minute}`;
};
