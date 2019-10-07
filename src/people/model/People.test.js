import { People } from './People'

it('new people has no persons', () => {
    let people = createPeople()
    expect(people.all.length).toBe(0)
})

function createPeople() {
    let people = new People()
    people.add("Miller", "Joe", "m", 178)
    people.add("Miller", "Hans", "m", 182)
    people.add("Schulze", "Gerd", "m", 185)
    people.add("Meier", "Hans", "m", 151)
    people.add("Miller", "Josa", "f", 168)
    people.add("Miller", "Hannah", "f", 172)
    people.add("Schulze", "Gerda", "f", 155)
    return people
}

it('adds persons correctly', () => {
    let people = createPeople();
    expect(people.all().length).toBe(7)
})

it('filters for males', () => {
    let people = createPeople()
    let males = people.males()
    expect(males.length).toBe(4)
    console.log('Male persons:')
    males.forEach(value => console.log(value))
})

it('filters for females', () => {
    let people = createPeople()
    let males = people.females()
    expect(males.length).toBe(3)
    console.log('Female persons:')
    males.forEach(value => console.log(value))
})
