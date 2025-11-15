load("@aspect_rules_ts//ts:defs.bzl", "ts_project")

package(default_visibility = ["//packages/lib:__subpackages__"])

ts_project(
    name = "src",
    srcs = ["index.ts"],
    declaration = True,
    declaration_map = True,
    preserve_jsx = False,
    source_map = True,
    tsconfig = "//:tsconfig",
    deps = ["//packages/lib:node_modules/zod"],
)
