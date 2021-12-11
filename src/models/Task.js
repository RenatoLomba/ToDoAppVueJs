export class Task {
    /**
     * @type {string}
     */
    text;
    /**
     * @type {string}
     */
    key;
    /**
     * @type {boolean}
     */
    isDone;

    /**
     * @param {Task} params 
     */
    constructor(params) {
        this.text = params.text;
        this.key = params.key;
        this.isDone = params.isDone;
    }
}
