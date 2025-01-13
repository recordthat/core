export default {
  branches: ["main"], // The branch you release from
  plugins: [
    "@semantic-release/commit-analyzer", // Analyzes commits to determine version bump
    "@semantic-release/release-notes-generator", // Generates release notes
    "@semantic-release/changelog", // Updates the CHANGELOG.md file
    "@semantic-release/github", // Publishes the release to GitHub
    "@semantic-release/npm", // Publishes the package to npm
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"], // Push updated files to Git
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
