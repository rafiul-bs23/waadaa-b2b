const fs = require("fs");

// Define the custom regex pattern for your commit messages
const commitMessagePattern =
  /^(Feat|Fix|Bug|Doc|Upgrade|Merge): WDT-\d+(\/| - )[A-Z].+|^Merge (remote-tracking )?branch '.+' into .+/;

// Get the commit message from the file passed by the Husky commit-msg hook
const commitMessageFile = process.argv[2];
const commitMessage = fs.readFileSync(commitMessageFile, "utf-8").trim();

// Validate only the first line of the commit message
const firstLine = commitMessage.split("\n")[0];

if (!commitMessagePattern.test(firstLine)) {
  console.error(
    `\n❌ Invalid commit message format:\n"${commitMessage}"\n\n` +
      '✅ Commit message must follow the format: "Feat: WDT-123/Some description" or "Feat: WDT-123 - Some description"\n' +
      'Example: "Feat: WDT-456/Add user login functionality" or "Feat: WDT-456 - Add user login functionality"\n',
  );
  process.exit(1); // Exit with error code to fail the commit
}

// If the commit message is valid, continue
console.log("✅ Commit message format is valid.");
process.exit(0); // Exit successfully
