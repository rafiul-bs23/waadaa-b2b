export const toTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const kebabToTitleCase = (kebabStr: string): string => {
  const spacedStr = kebabStr.replace(/-/g, " ");
  return toTitleCase(spacedStr);
};

export function isEncoded(text: string): boolean {
  try {
    return text !== decodeURIComponent(text);
  } catch (e) {
    console.error("error : ", e);
    return false;
  }
}

export function decode(text: string): string {
  return isEncoded(text) ? decodeURIComponent(text) : text;
}
