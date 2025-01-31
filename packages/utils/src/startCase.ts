/**
 *  Example usage:
 *
    startCase("THIS_IS_A_TEST-STRING")

    "This Is A Test String"
 */
export type StartCaseOptions = {
  exceptions?: string[];
};

export const startCase = (str?: string, options?: StartCaseOptions) => {
  if (!str) {
    return "";
  }

  if (options && options.exceptions) {
    if (options.exceptions.includes(str)) {
      return str;
    }
  }

  const cleanedStr = str.replace(/[^a-zA-Z0-9\s()]+/g, " ");
  const words = cleanedStr.toLowerCase().split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const startCaseString = capitalizedWords.join(" ");

  return startCaseString;
};
