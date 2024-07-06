GitHub Contribution Bot Script

This script automates the process of creating random commit contributions on a GitHub repository. Using the moment library for date manipulation and simple-git for Git operations, it generates a specified number of commits with dates spread across a defined timeline. This tool is particularly useful for developers looking to enhance their GitHub activity graph for visualization purposes.

Features:

Automated Commits: Automatically creates multiple commits recursively.
Date Manipulation: Utilizes the moment library to manage and format dates for each commit.
Customizable Timeline: Allows setting a desired start date and adjusts subsequent commit dates.
Git Integration: Uses simple-git to handle Git operations such as adding files and committing changes.
JSON Data Logging: Writes commit data to a JSON file for record-keeping and debugging.

Example Usage:
To generate 10 commits starting from January 1, 2024:
makeCommit(10);
