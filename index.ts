import {
  createTestCase,
  Int,
  TestCase,
  WordArray,
} from "itptit-test-generator";

type int = number;

class SubTest extends TestCase {
  @Int(1, 100)
  n: int;

  @WordArray("$n", 1, 10)
  array: number[];

  template = `$n\n$array`;
}

/*
3
1 2
3 4
2 5
 */
createTestCase({
  amount: 20,
  inputDir: "input",
  outputDir: "output",
  template: SubTest,
  solutionPath: "solve.cpp",
  inputFilenameTemplate: "dauvao$i.inp",
  outputFilenameTemplate: "daura$i.out",
}).then();
