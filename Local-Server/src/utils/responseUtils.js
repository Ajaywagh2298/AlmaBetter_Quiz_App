const badRequest = {
  name: "badRequest",
  code: 400,
  message: "Bad Request",
};

const unauthorized = {
  name: "unauthorized",
  code: 401,
  message: "Unauthorized",
};

const forbidden = {
  name: "forbidden",
  code: 403,
  message: "Forbidden",
};

const notFound = {
  name: "notFound",
  code: 404,
  message: "Not found",
};

const conflict = {
  name: "conflict",
  code: 409,
  message: "Conflict",
};

const internalError = {
  name: "internalError",
  code: 500,
  message: "Internal server error",
};

const userNotRegistered = "User not Registered";
const invalidUsernameOrPassword = "Invalid Username or Password";

const successRequest = {
    name: "successRequest",
    code: 200,
    message: "Process completed successfully.",
}

module.exports = {
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    conflict,
    internalError,
    userNotRegistered,
    invalidUsernameOrPassword,
    successRequest,
}