import { execSync } from "child_process";

execSync("npm run tsc -- -p ./", { stdio: "inherit", cwd: process.cwd() });
