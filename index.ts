import {
  createTestCase,
  FakeName,
  Int,
  Loop,
  TestCase,
  UseSubGeneration,
  WordArray,
} from "itptit-test-generator";
import { fakeName } from "itptit-test-generator/dist/src/fake/name.list.js";

type int = number;

class RatNhieuTen extends TestCase {
  @FakeName
  ten: string;

  template = `$ten\n`;
}

class SubTest extends TestCase {
  @Int(1, 100)
  n: int;

  @Loop("$n")
  @UseSubGeneration(RatNhieuTen)
  ten() {}

  template = `$n\n$ten`;
}

createTestCase({
  amount: 20,
  inputDir: "input",
  outputDir: "output",
  template: SubTest,
  solutionPath: "solve.cpp",
  inputFilenameTemplate: "dauvao$i.inp",
  outputFilenameTemplate: "daura$i.out",
}).then();
