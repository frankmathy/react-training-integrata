import { People } from './People'
import { Person } from './Person'

let peopleData = new People()
peopleData.add("Miller", "Joe", "m", 178)
peopleData.add("Miller", "Hans", "m", 182)
peopleData.add("Schulze", "Gerd", "m", 185)
peopleData.add("Meier", "Hans", "m", 151)
peopleData.add("Miller", "Josa", "f", 168)
peopleData.add("Miller", "Hannah", "f", 172)
peopleData.add("Schulze", "Gerda", "f", 155)
let userProfile = new Person(42, "Meier", "Hans", "m", 177)

export {  peopleData , userProfile };
