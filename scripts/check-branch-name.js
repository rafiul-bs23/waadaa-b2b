const { execSync } = require("child_process");

// Define the allowed branch name pattern
const BRANCH_NAME_REGEX =
  /^(Feat|BugFix|HotFix|Release|Doc)\/WDT-\d+(?:\/[a-z0-9\-/]*)?$|^(main|development|release|stage|staging|dev|fix|qa|test|testing)$/;

// Get the current branch name
try {
  const branchName = execSync("git symbolic-ref --short HEAD")
    .toString()
    .trim();

  // Check if the branch name matches the pattern
  if (!BRANCH_NAME_REGEX.test(branchName)) {
    console.error(
      `Error: Branch name '${branchName}' does not follow the required naming convention.\n` +
        "Please use the format: (Feat|BugFix|HotFix|Release)/WDT-123/description (optional), or a standard branch name like main, dev, etc.",
    );
    process.exit(1); // Exit with an error code
  } else {
    console.log(`Branch name '${branchName}' is valid.`);
  }
} catch (error) {
  if (error.message.includes("not a git repository")) {
    console.error(
      "Error: This is not a git repository. Please ensure you are inside a git project.",
    );
  } else {
    console.error("Failed to retrieve branch name:", error.message);
  }
  process.exit(1); // Exit with an error code
}
