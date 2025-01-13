#!/usr/bin/env node

import { startServer } from "./server";
const { Command } = require("commander");
const program = new Command();

program
  .command("init")
  .description("Initialize the RecordThat server and serve the UI")
  .action(() => {
    console.log("RecordThat init script running...");
    startServer(4000);
  });

program.parse(process.argv);
