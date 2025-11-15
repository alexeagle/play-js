load("@aspect_rules_ts//ts:defs.bzl", "ts_project")

package(default_visibility = ["//packages/web:__subpackages__"])

ts_project(
    name = "src",
    srcs = ["hello.ts"],
    declaration = True,
    declaration_map = True,
    preserve_jsx = False,
    source_map = True,
    tsconfig = "//:tsconfig",
    deps = [
        "//packages/web:node_modules/@ours/lib",
        "//packages/web:node_modules/lit",
    ],
)
