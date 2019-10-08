import { Log } from './Log'

it('add to log', () => {
    let log = new Log(5)
    expect(log.logEntries.length).toBe(0)
    log.add("Message1")
    expect(log.logEntries.length).toBe(1)
    log.add("Message2")
    log.add("Message3")
    log.add("Message4")
    log.add("Message5")
    log.add("Message6")
    log.add("Message7")
    log.add("Message8")
    expect(log.logEntries.length).toBe(5)
})
