// $npx ts-node part2.ts
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

function checkLevel(level: number[]): boolean {
	if (allIncreasing(level) || allDecreasing(level)) {
		return isValidLevel(level);
	} else {
		return false;
	}
}

function checkAllPermutations(level: number[]): boolean {
	if (checkLevel(level)) {
		return true;
	} else {
		for (let i = 0; i < level.length; i++) {
			let localLevel = Array.from(level);
			localLevel.splice(i, 1);
			if (checkLevel(localLevel)) {
				return true;
			}
		}
		return false;
	}
}

let safeLevelsCount = 0;
levels.forEach((level) => {
	if (checkAllPermutations(level)) {
		safeLevelsCount++;
	}
});
console.log("The answer to part 2 is: ", safeLevelsCount);
// the answer must be greater than 670
// 707 and 767 are both too high
// 693 is too low
// 701 is not correct
// 700 is the correct answer. the issue I kept having was either due to
// the array.splice'd level not resetting in the loop or
// my for loop being off by one

// running the instructions' test values
// should be true, flase, false, true, true, true

// let testLevel1 = [7, 6, 4, 2, 1];
// let testLevel2 = [1, 2, 7, 8, 9];
// let testLevel3 = [9, 7, 6, 2, 1];
// let testLevel4 = [1, 3, 2, 4, 5];
// let testlevel5 = [8, 6, 4, 4, 1];
// let testLevel6 = [1, 3, 6, 7, 9];

// console.log(testLevel1, checkAllPermutations(testLevel1));
// console.log(testLevel2, checkAllPermutations(testLevel2));
// console.log(testLevel3, checkAllPermutations(testLevel3));
// console.log(testLevel4, checkAllPermutations(testLevel4));
// console.log(testlevel5, checkAllPermutations(testlevel5));
// console.log(testLevel6, checkAllPermutations(testLevel6));
