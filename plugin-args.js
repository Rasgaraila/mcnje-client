class Base {
    constructor(type) {
        this.type = name;
        this.status = true;
    }
}
class Plugin extends Base {
    constructor(name, desc, ver, author) {
        super("plugin");
        this.name = name;
        this.desc = desc;
        this.ver = ver;
        this.author = author;
    }
}
