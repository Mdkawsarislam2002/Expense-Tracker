import concurrently from "concurrently";
import { exec } from "child_process";

(async () => {
  exec("npm run lint ");

  await concurrently([
    { command: "npm run tauri dev" },
    { command: "cd server/ && npm  start" },
  ]);
})();
