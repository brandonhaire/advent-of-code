// $npx ts-node part2.ts
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

let sum: number = 0;
for (let i = 0; i < lineCount; i++) {
	let occurrence = list2.filter((x) => x === list1[i]).length;
	sum += list1[i] * occurrence;
}

console.log("Part 2 Answer is: ", sum);
