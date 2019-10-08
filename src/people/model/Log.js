export class Log {

    logEntries = []

    constructor(maxSize) {
        this.maxSize = maxSize
    }

    add(message) {
        this.logEntries.unshift(message)
        this.logEntries = this.logEntries.slice(0, this.maxSize)
    }
}