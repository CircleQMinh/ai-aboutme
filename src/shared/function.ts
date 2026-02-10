/**
 * Calculates the year difference between a given date and now.
 * Returns a number like: 1, 2, 3, 3.5
 *
 * @param inputDate - Date | string | number
 * @param precision - decimal places (default: 1)
 */
export function getYearDifference(
    inputDate: Date | string | number,
    precision = 1
  ): number {
    const start = new Date(inputDate);
  
    if (isNaN(start.getTime())) {
      throw new Error("Invalid date provided");
    }
  
    const now = new Date();
  
    const diffMs = now.getTime() - start.getTime();
  
    // Average year length including leap years
    const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  
    const years = diffMs / msPerYear;
  
    return Number(years.toFixed(precision));
  }
  