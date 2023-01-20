// Gets time from date
export const getTime = (date?: Date) => {
  return date != null ? new Date(date).getTime() : 0;
};
 