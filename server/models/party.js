module.exports = class Party {
    constructor(_party) {
        this.id = this.globalCounterParty++;
        this.title = _party.title;
        this.description = _party.description;
        this.enter = _party.enter;
        this.date = _party.date;
        this.price = _party.price;
        this.address = _party.address;
        this.category = _party.category;
    }
};

globalCounterParty = 0;
