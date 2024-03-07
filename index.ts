import {
  createTestCase,
  Int,
  Loop,
  NumberArray,
  TestCase,
  UseSubGeneration,
} from "itptit-test-generator";

class SubTest extends TestCase {
  @Int(1, 5)
  d: number;

  @Int(1, 5)
  g: number;
  template = `$d $g`;
}

export class TestCaseInput extends TestCase {
  @Int(1, 5)
  s: number;

  @Int(1, 5)
  b: number;

  @NumberArray("$s", 0, 5)
  array: number[];

  @Loop("$b")
  @UseSubGeneration(SubTest)
  anh() {}

  template = `$s $b\n$array\n$anh`;
}

createTestCase({
  amount: 20,
  inputDir: "input",
  outputDir: "output",
  template: TestCaseInput,
  solutionPath: "solve.cpp",
  inputFilenameTemplate: "dauvao$i.inp",
  outputFilenameTemplate: "daura$i.out",
}).then();
