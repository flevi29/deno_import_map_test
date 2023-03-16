import { build, emptyDir } from "dnt";
import { default as denoJson } from "../deno.json" assert { type: "json" };

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  shims: {},
  typeCheck: true,
  test: false,
  declaration: true,
  scriptModule: false,
  esModule: true,
  package: {
    // package.json properties
    name: "deno_import_map_test",
    version: denoJson.version,
    author: "John Dough",
    description: "Test test test.",
    devDependencies: { "@types/node": "^18.15.3" },
  },
  compilerOptions: {
    target: "Latest",
  },
  packageManager: "npm",
});
