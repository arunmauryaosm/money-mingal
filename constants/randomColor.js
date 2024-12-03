export const getDarkModeColor = (char) => {
  // Validate the input
  if (typeof char !== "string" || char.length !== 1 || !/[a-z]/.test(char)) {
    throw new Error("Input must be a single character from a-z.");
  }

  // Map the character to a unique hue value (0-360)
  const charCode = char.charCodeAt(0) - 97; // 'a' is 97
  const hue = (charCode * 360) / 26; // Spread hues evenly across the alphabet

  // Fixed saturation and lightness for dark mode suitability
  const saturation = 70; // Saturation for vibrancy
  const lightness = 40; // Lightness for dark mode

  // Convert HSL to RGB for React Native
  return hslToHex(hue, saturation, lightness);
};

const hslToHex = (h, s, l) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};
