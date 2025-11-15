load("@aspect_rules_ts//ts:defs.bzl", "ts_project")

ts_project(
    name = "src",
    srcs = ["hello.ts"],
    deps = [
        "//packages/web:node_modules/@ours/lib",
        "//packages/web:node_modules/lit",
    ],
)
