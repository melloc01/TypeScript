/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
//// function f1 () {
////     for ([|const elem of|] ["a", "b", "c"]) {
////
////     }
//// }

verify.codeFixAtPosition("const {} of ");

