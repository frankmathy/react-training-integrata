export class Log {

    logEntries = []

    constructor(maxSize) {
        this.maxSize = maxSize
    }

    add(message) {
        this.logEntries.unshift(new Date().toISOString().substring(0, 19) + ": " + message)
        this.logEntries = this.logEntries.slice(0, this.maxSize)
    }
}