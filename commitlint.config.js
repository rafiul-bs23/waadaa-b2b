module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [0, "always", ["Feat", "Fix", "Bug", "Doc"]],
    "type-case": [0, "always", "pascal-case"],
    "type-empty": [0],
    "subject-case": [2, "always", "sentence-case"],
    "header-max-length": [2, "always", 100],
    "body-max-line-length": [2, "always", 1000],
  },
};
