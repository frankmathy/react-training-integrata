import { Person } from './Person'

it('creates people', () => {
    let p1 = new Person("Test", "Hans", 182, 'm')
    let p2 = new Person("Test", "Gustav", 175, 'm') 
    expect(p1.lastname).toBe("Test")
    console.log("Last name: " + p1.lastname)
});

