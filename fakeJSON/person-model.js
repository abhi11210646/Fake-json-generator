
const mockedData = require("./mock-data")
const random = Math.random
class Person {
    constructor() {
        this.title = this.getTitle();
        this.firstName = this.getFirstName();
        this.lastName = this.getLastName();
        this.favouriteColor = this.getFavouriteColor();
        this.about = this.getAbout();
        this.address = this.getAddress();
        this.company = this.getCompany();
        this.contactDetails = this.getContactDetails();
    }
    getTitle() {
        return mockedData.titles[this.getRandonInit(mockedData.titles.length)];
    }
    getFirstName() {
        return mockedData.firstNames[this.getRandonInit(mockedData.firstNames.length)];
    }
    getLastName() {
        return mockedData.lastNames[this.getRandonInit(mockedData.lastNames.length)];
    }
    getFavouriteColor() {
        return mockedData.colors[this.getRandonInit(mockedData.colors.length)];
    }
    getAbout() {
        let randInt = this.getRandonInit(mockedData.lorem.length - 10);
        let randArr = mockedData.lorem.slice(randInt, randInt + 10);
        randArr.push("...");
        return randArr.join(" ");
    }
    getContactDetails() {
        return {
            phone:`(${Math.floor(random()*(999-100+1)+100)})-(${Math.floor(random()*(999-100+1)+100)})-(${Math.floor(random()*(999-100+1)+100)})`,
            email:`${this.firstName}.${this.lastName}@${this.company}.com`
        };
    }
    getAddress() {
        let randInt = this.getRandonInit(mockedData.countries.length);
        return {
            street: mockedData.streets[this.getRandonInit(mockedData.streets.length)],
            city: mockedData.cities[this.getRandonInit(mockedData.cities.length)],
            country: mockedData.countries[randInt],
            countryCode: mockedData.countryCodes[randInt]
        };
    }
    getCompany() {
        return mockedData.companies[this.getRandonInit(mockedData.companies.length)];
    }
    getRandonInit(max) {
        return Math.floor(random() * max);
    }
}
module.exports = Person;