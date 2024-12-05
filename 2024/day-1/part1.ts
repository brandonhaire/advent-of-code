// $npx ts-node part1.ts
import * as fs from "fs";

const fileContent = fs.readFileSync("./list.txt", "utf-8");
const lines = fileContent.split("\n");

let list1: number[] = [];
let list2: number[] = [];

const lineCount = lines.length;
lines.forEach((line: string) => {
	const split = line.split("   ");
	list1.push(parseInt(split[0]));
	list2.push(parseInt(split[1]));
});

list1.sort();
list2.sort();

let distances: number[] = [];

for (let i = 0; i < lineCount; i++) {
	distances.push(Math.abs(list1[i] - list2[i]));
}

let sum: number = 0;
distances.forEach((distance) => {
	sum += distance;
});

console.log("Part 1 Answer is: ", sum);
