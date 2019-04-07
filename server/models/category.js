module.exports = class Party {
    constructor(_category) {
        this.id = this.globalCounterCat++;
        this.title = _category.title;
    }
}

globalCounterCat = 0;