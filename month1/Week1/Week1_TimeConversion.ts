function convertTimeToMilitary(s: string): string {
  // Extract hours, minutes and seconds from the input string
  const [hourStr, minuteStr, secondStrAMPM] = s.split(":");
  const secondStr = secondStrAMPM.slice(0, 2);
  const AMPM = secondStrAMPM.slice(2);

  // Convert hours to military format
  let hour = parseInt(hourStr);
  if (AMPM === "PM" && hour !== 12) {
    hour += 12;
  } else if (AMPM === "AM" && hour === 12) {
    hour = 0;
  }

  // Pad single digit hours, minutes and seconds with leading zeros
  const paddedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const paddedMinute = parseInt(minuteStr) < 10 ? `0${parseInt(minuteStr)}` : `${minuteStr}`;
  const paddedSecond = parseInt(secondStr) < 10 ? `0${parseInt(secondStr)}` : `${secondStr}`;

  // Return the military format time string
  return `${paddedHour}:${paddedMinute}:${paddedSecond}`;
}
