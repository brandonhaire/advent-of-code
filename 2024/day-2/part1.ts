// $npx ts-node part1.ts
import * as fs from "fs";

const fileContent = fs.readFileSync("./reports.txt", "utf-8");
const lines = fileContent.split("\n");

let levels: number[][] = [];

lines.forEach((line: string) => {
	const split = line.split(" ");
	let level: number[] = [];
	split.forEach((element) => {
		level.push(parseInt(element));
	});
	levels.push(level);
});

// console.log(levels[0].toString(), levels[1], levels[2], levels[3], levels[4]);

function allIncreasing(level: number[]): boolean {
	for (let i = 0; i < level.length - 1; i++) {
		if (level[i] > level[i + 1]) {
			return false;
		}
	}
	return true;
}

function allDecreasing(level: number[]): boolean {
	for (let i = 0; i < level.length - 1; i++) {
		if (level[i] < level[i + 1]) {
			return false;
		}
	}
	return true;
}

function isValidLevel(level: number[]): boolean {
	for (let i = 0; i < level.length - 1; i++) {
		if (
			Math.abs(level[i] - level[i + 1]) < 1 ||
			Math.abs(level[i] - level[i + 1]) > 3
		) {
			return false;
		}
	}
	return true;
}

let safeLevelsCount = 0;
levels.forEach((level) => {
	if (allIncreasing(level) || allDecreasing(level)) {
		if (isValidLevel(level)) {
			safeLevelsCount++;
		}
	}
});
console.log("The answer to part 1 is: ", safeLevelsCount);

// running the instructions' test values
// should be true, flase, false, false, false, true
// let testLevel1 = [7, 6, 4, 2, 1];
// let testLevel2 = [1, 2, 7, 8, 9];
// let testLevel3 = [9, 7, 6, 2, 1];
// let testLevel4 = [1, 3, 2, 4, 5];
// let testlevel5 = [8, 6, 4, 4, 1];
// let testLevel6 = [1, 3, 6, 7, 9];

// console.log(
// 	(allIncreasing(testLevel1) || allDecreasing(testLevel1)) &&
// 		isValidLevel(testLevel1)
// );
// console.log(
// 	(allIncreasing(testLevel2) || allDecreasing(testLevel2)) &&
// 		isValidLevel(testLevel2)
// );
// console.log(
// 	(allIncreasing(testLevel3) || allDecreasing(testLevel3)) &&
// 		isValidLevel(testLevel3)
// );
// console.log(
// 	(allIncreasing(testLevel4) || allDecreasing(testLevel4)) &&
// 		isValidLevel(testLevel4)
// );
// console.log(
// 	(allIncreasing(testlevel5) || allDecreasing(testlevel5)) &&
// 		isValidLevel(testlevel5)
// );
// console.log(
// 	(allIncreasing(testLevel6) || allDecreasing(testLevel6)) &&
// 		isValidLevel(testLevel6)
// );
