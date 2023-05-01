import concurrently from "concurrently";
import { exec } from "child_process";

(async () => {
  exec("npm i concurrently ");
  // Run both commands in parallel
  concurrently([
    { command: "npm run tauri dev" },
    { command: "cd server/ && npm  start" },
    { command: "npm run lint " },
  ]);
})();
