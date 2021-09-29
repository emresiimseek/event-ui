const { v4 } = require("uuid");

class UuidUtils {
  uuidv4 = () => v4();
}

export const uuidUtils = new UuidUtils();
