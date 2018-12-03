export const redText = input => {
  return FgRed + input + Reset;
};

// Text formatting
const Reset = "\x1b[0em";

// Foreground text
const FgRed = "\x1b[30m";
