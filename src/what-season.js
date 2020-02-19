module.exports = function getSeason(inputDate) {
  if (!inputDate) return "Unable to determine the time of year!";

  if (Object.prototype.toString.call(inputDate) !== "[object Date]")
    throw new Error();

  const month = inputDate.getMonth();

  const winterSeason = "winter";
  const springSeason = "spring";
  const summerSeason = "summer";
  const autumnSeason = "autumn";

  const seasons = {
    0: winterSeason,
    1: winterSeason,
    2: springSeason,
    3: springSeason,
    4: springSeason,
    5: summerSeason,
    6: summerSeason,
    7: summerSeason,
    8: autumnSeason,
    9: autumnSeason,
    10: autumnSeason,
    11: winterSeason
  };

  return seasons[month];
};
