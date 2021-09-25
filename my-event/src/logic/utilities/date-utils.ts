class DateUtils {
  toDateString(date: Date) {
    if (!date.getDate()) return "";

    return new Date(date.toString().split("GMT")[0] + " UTC")
      .toISOString()
      .split(".")[0];
  }

  nowApi() {
    return new Date();
  }
}

export const dateUtils = new DateUtils();
