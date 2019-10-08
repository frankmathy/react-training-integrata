import { People } from './People'
import { Person } from './Person'

let testPeople = new People()
testPeople.add("Miller", "Joe", "m", 178)
testPeople.add("Miller", "Hans", "m", 182)
testPeople.add("Schulze", "Gerd", "m", 185)
testPeople.add("Meier", "Hans", "m", 151)
testPeople.add("Miller", "Josa", "f", 168)
testPeople.add("Miller", "Hannah", "f", 172)
testPeople.add("Schulze", "Gerda", "f", 155)
let userProfile = new Person(42, "Meier", "Hans", "m", 177)

export {  testPeople, userProfile };
