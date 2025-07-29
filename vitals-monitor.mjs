export async function vitalsOk(temperature, pulseRate, spo2) {
  return (
    isTemperatureOk(temperature) && isPulseRateOk(pulseRate) && isSpo2Ok(spo2)
  );
}

async function displayVitalAlert(message) {
  console.log(message);
  for (let i = 0; i < 6; i++) {
    process.stdout.write("\r* ");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    process.stdout.write("\r *");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

function isTemperatureOk(temperature) {
  if (temperature > 102 || temperature < 95) {
    displayVitalAlert("Temperature is critical!");
    return 0;
  }
  return 1;
}

function isPulseRateOk(pulseRate) {
  if (pulseRate < 60 || pulseRate > 100) {
    displayVitalAlert("Pulse Rate is critical!");
    return 0;
  }
  return 1;
}

function isSpo2Ok(spo2) {
  if (spo2 < 90) {
    displayVitalAlert("Oxygen Saturation is critical!");
    return 0;
  }
  return 1;
}
