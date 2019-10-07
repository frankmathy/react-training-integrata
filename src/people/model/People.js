import { Person } from "./Person";
import { throwStatement } from "@babel/types";

export class People {

    persons = new Array();

    constructor() {
        var id = 1 
    }

    add(lastname, firstname, gender, height) {
        let newPerson = new Person(this.id++, lastname, firstname, height, gender)
        this.persons.push(newPerson)
    }

    all() {
        return this.persons
    }

    filterForGender(gender) {
        return this.persons.filter(person => person.gender === gender).map(person => person.info())
    }

    males() {
        return this.filterForGender('m')
    }

    females() {
        return this.filterForGender('f')
    }
}