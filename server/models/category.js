module.exports = class Category {
    constructor(title ) {
        this.id = globalCounterCat++;
        this.title = title;
    }
};

globalCounterCat = 0;
