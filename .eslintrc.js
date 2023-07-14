/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "prettier/prettier": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
