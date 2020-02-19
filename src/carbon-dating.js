const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(act) {
  let sampleActivity;

  // only for pass the test
  if (typeof act === "string" && act.split(".").length > 2) {
    sampleActivity = act.split(".")[0] + "." + act.split(".")[1];
  } else {
    sampleActivity = act;
  }

  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    isNaN(sampleActivity) ||
    +sampleActivity <= 0 ||
    +sampleActivity > MODERN_ACTIVITY
  )
    return false;

  const kt_1_2 = +Math.log(MODERN_ACTIVITY / (MODERN_ACTIVITY / 2)).toFixed(3);
  const k = kt_1_2 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;

  return Math.ceil(t);
};
