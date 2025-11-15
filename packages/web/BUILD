load("@aspect_rules_js//js:defs.bzl", "js_library", "js_run_devserver")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@npm//packages/web:vite/package_json.bzl", "bin")

npm_link_all_packages(name = "node_modules")

js_run_devserver(
    name = "dev",
    chdir = package_name(),
    data = [
        "app",
        "vite.config.js",
    ],
    tool = "vite",
)

bin.vite_binary(name = "vite")

js_library(
    name = "app",
    srcs = [
        "index.html",
        "package.json",
        "//packages/web/src",
    ],
)
