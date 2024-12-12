const transformDuration = (duration: number): string => {
  const now = new Date();

  switch (duration) {
    case 1:
      now.setDate(now.getDate() + 7);
      break;
    case 2:
      now.setDate(now.getDate() + 14);
      break;
    case 3:
      now.setMonth(now.getMonth() + 1);
      break;
    case 4:
      now.setMonth(now.getMonth() + 3);
      break;
    default:
      now.setDate(now.getDate() + 7);
  }

  return now.toISOString();
};

export default transformDuration;
