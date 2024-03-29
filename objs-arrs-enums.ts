// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: "Samuel",
// 	age: 32,
// 	hobbies: [
// 		"Sports",
// 		"Cooking",
// 	],
// 	role: [2, "author"]
// };

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR
};

const person = {
	name: "Samuel",
	age: 32,
	hobbies: [
		"Sports",
		"Cooking",
	],
	role: Role.ADMIN
};

let favoriteActivities: string[];

favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}