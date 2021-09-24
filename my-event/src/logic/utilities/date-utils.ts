class DateUtils {
  toDateString(date: Date) {
    if (!date.getDate()) return "";

    return new Date(date.toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0];
  }
}

export const dateUtils = new DateUtils();
