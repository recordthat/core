#!/usr/bin/env node

import { startServer } from "./server";

const args = process.argv.slice(2);
const portArgIndex = args.indexOf("--port");

const port =
  portArgIndex !== -1 && args[portArgIndex + 1]
    ? parseInt(args[portArgIndex + 1], 10)
    : 4000;

startServer(port);
