export class Example {
    public key: string;

    constructor(obj = null) {
        this.key = obj.key || "";
    }
}