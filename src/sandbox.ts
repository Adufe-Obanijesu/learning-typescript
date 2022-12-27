import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {ListTemplate} from "./classes/ListTemplate.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	let values: [string, string, number];
	values = [tofrom.value, details.value, amount.valueAsNumber];

	let doc: HasFormatter;
	if (type.value === 'Invoice') {
		doc = new Invoice(...values);
	} else {
		doc = new Payment(...values);
	}

	list.render(doc, type.value, 'start');
})

// Generics

const addUID = <T extends object>(obj: T) => {
	let uid = Math.floor(Math.random() * 100);
	return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});

console.log(docOne.name);

// Enums

// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// with interfaces
// interface Resource <T> {
// 	uid: number;
// 	resourceType: ResourceType;
// 	data: T;
// }

// const docThree: Resource<object> = {
// 	uid: 1,
// 	resourceType: ResourceType.BOOK,
// 	data: {name: 'shaun'}
// }

// const docFour: Resource<string[]> = {
// 	uid: 2,
// 	resourceType: ResourceType.PERSON,
// 	data: [ 'bread', 'milk', 'toilet roll' ]
// }

// console.log(docThree, docFour)

// Tuples

// let arr = ['ryu', 25, true];
// arr = [5,6]

// let tup: [string, number, boolean] = ["ryu", 25, true];

// let student: [string, number];
// student = ['chun-li', 223423];