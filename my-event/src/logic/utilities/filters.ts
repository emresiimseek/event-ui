import moment from "moment";

class Filters {
  dateTime(value: string) {
    if (!value) return;

    return moment(String(value)).format("MM/DD/YYYY hh:mm");
  }
}

export const filters = new Filters();
