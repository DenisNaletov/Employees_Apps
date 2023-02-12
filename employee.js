const random = new Random();

class Employee {
    #id;
    #name;
    emailAddress;
    #gender;
    #salary;
    #title;


    constructor(id, emailAddress, gender, name, salary, title) {
        this.#id = random.getRandomNumber(0, 1000);;
        this.#name = random.getRandomName();
        this.emailAddress = random.getRandomEmail();
        this.#gender = random.getRandomGender();
        this.#salary = random.getRandomNumber(0, 10000);
        this.#title = random.getRandomTitle();
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get emailAddress() {
        return this.emailAddress;
    }

    set emailAddress(value) {
        this.emailAddress = value;
    }

    get gender() {
        return this.#gender;
    }

    set gender(value) {
        this.#gender = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get salary() {
        return this.#salary;
    }

    set salary(value) {
        this.#salary = value;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }
}