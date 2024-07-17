const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "jsonlogs",
  reportPath: "./reports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "Electron",
      version: "106",
    },
    device: "Local test machine",
    platform: {
      name: "window",
      version: "10",
    },
  },
  customData: {
    title: "E2E Test Cases",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "May 14th 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "May 14th 2024, 02:56 PM EST" },
    ],
  },
});