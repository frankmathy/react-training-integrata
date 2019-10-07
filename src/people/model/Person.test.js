import { Person } from './Person'

it('creates people', () => {
    let p1 = new Person(1, "Test", "Hans", 182, 'm')
    let p2 = new Person(2, "Test", "Gustav", 175, 'm') 
    expect(p1.id).toBe(1)
    expect(p1.lastname).toBe("Test")
    console.log("Last name: " + p1.lastname)
});

it('info outputs', () => {
    let p1 = new Person(1, "Test", "Hans", 182, 'm')
    console.log("Info: " + p1.info())
});
