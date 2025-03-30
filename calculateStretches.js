export function calculateStretches(totalConsumption) {
  const stretches = [];
  const stretchRanges = [
    { min: 1, max: 10, baseCost: 0, rate: 300, additionalFee: 0 },
    { min: 11, max: 20, baseCost: 3000, rate: 500, additionalFee: 0 },
    { min: 21, max: 30, baseCost: 8000, rate: 700, additionalFee: 0 },
    { min: 31, max: 40, baseCost: 15000, rate: 700, additionalFee: 1500 },
    { min: 41, max: 50, baseCost: 23500, rate: 700, additionalFee: 2500 },
    { min: 51, max: 60, baseCost: 33000, rate: 700, additionalFee: 3500 },
    { min: 61, max: 70, baseCost: 43500, rate: 700, additionalFee: 4500 },
    { min: 71, max: 80, baseCost: 55000, rate: 700, additionalFee: 5500 },
    { min: 81, max: 90, baseCost: 67500, rate: 700, additionalFee: 6500 },
    { min: 91, max: 100, baseCost: 81000, rate: 700, additionalFee: 7500 },
    { min: 101, max: 110, baseCost: 95500, rate: 700, additionalFee: 8500 },
    { min: 111, max: 120, baseCost: 111000, rate: 700, additionalFee: 9500 },
    { min: 121, max: 130, baseCost: 127500, rate: 700, additionalFee: 10500 },
    { min: 131, max: 140, baseCost: 145000, rate: 700, additionalFee: 11500 },
    { min: 141, max: 150, baseCost: 163500, rate: 700, additionalFee: 12500 },
    { min: 151, max: 160, baseCost: 183000, rate: 700, additionalFee: 13500 },
    { min: 161, max: 170, baseCost: 203500, rate: 700, additionalFee: 14500 },
    { min: 171, max: 180, baseCost: 225000, rate: 700, additionalFee: 15500 },
    { min: 181, max: 190, baseCost: 247500, rate: 700, additionalFee: 16500 },
    { min: 191, max: 200, baseCost: 271000, rate: 700, additionalFee: 17500 },
    { min: 201, max: 210, baseCost: 295500, rate: 700, additionalFee: 18500 },
    { min: 211, max: 220, baseCost: 321000, rate: 700, additionalFee: 19500 },
    { min: 221, max: 230, baseCost: 347500, rate: 700, additionalFee: 20500 },
    { min: 231, max: 240, baseCost: 375000, rate: 700, additionalFee: 21500 },
    { min: 241, max: 250, baseCost: 403500, rate: 700, additionalFee: 22500 },
    { min: 251, max: 260, baseCost: 433000, rate: 700, additionalFee: 23500 },
    { min: 261, max: 270, baseCost: 463500, rate: 700, additionalFee: 24500 },
    { min: 271, max: 280, baseCost: 495000, rate: 700, additionalFee: 25500 },
    { min: 281, max: 290, baseCost: 527500, rate: 700, additionalFee: 26500 },
    { min: 291, max: 300, baseCost: 561000, rate: 700, additionalFee: 27500 },
    { min: 301, max: 310, baseCost: 595500, rate: 700, additionalFee: 28500 },
    { min: 311, max: 320, baseCost: 631000, rate: 700, additionalFee: 29500 },
    { min: 321, max: 330, baseCost: 667500, rate: 700, additionalFee: 30500 },
    { min: 331, max: 340, baseCost: 705000, rate: 700, additionalFee: 31500 },
    { min: 341, max: 350, baseCost: 743500, rate: 700, additionalFee: 32500 },
    { min: 351, max: 360, baseCost: 783000, rate: 700, additionalFee: 33500 },
    { min: 361, max: 370, baseCost: 823500, rate: 700, additionalFee: 34500 },
    { min: 371, max: 380, baseCost: 865000, rate: 700, additionalFee: 35500 },
    { min: 381, max: 390, baseCost: 907500, rate: 700, additionalFee: 36500 },
    { min: 391, max: 400, baseCost: 951000, rate: 700, additionalFee: 37500 },
    { min: 401, max: 410, baseCost: 995500, rate: 700, additionalFee: 38500 },
    { min: 411, max: 420, baseCost: 1041000, rate: 700, additionalFee: 39500 },
    { min: 421, max: 430, baseCost: 1087500, rate: 700, additionalFee: 40500 },
    { min: 431, max: 440, baseCost: 1135000, rate: 700, additionalFee: 41500 },
    { min: 441, max: 450, baseCost: 1183500, rate: 700, additionalFee: 42500 },
    { min: 451, max: 460, baseCost: 1283000, rate: 700, additionalFee: 43500 },
    { min: 461, max: 470, baseCost: 1283500, rate: 700, additionalFee: 44500 },
    { min: 471, max: 480, baseCost: 1335000, rate: 700, additionalFee: 45500 },
    { min: 481, max: 490, baseCost: 1387500, rate: 700, additionalFee: 46500 },
    { min: 491, max: 500, baseCost: 1441000, rate: 700, additionalFee: 47500 },
    { min: 501, max: 510, baseCost: 1495500, rate: 700, additionalFee: 48500 },
  ];

  const range = stretchRanges.find(
    (r) => totalConsumption >= r.min && totalConsumption <= r.max
  );

  if (range) {
    const consumption = totalConsumption - range.min + 1;
    const subtotal =
      range.baseCost + consumption * range.rate + range.additionalFee;

    stretches.push({
      rangeStart: range.min,
      rangeEnd: range.max,
      consumption: totalConsumption,
      rate: range.rate,
      subtotal: subtotal,
    });
  }

  return stretches;
}
