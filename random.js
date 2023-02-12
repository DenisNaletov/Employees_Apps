class Random
{
    constructor() {}

    getRandomNumber = function (min, max)
    {
        if(min >= max)
            throw new Error('Max should be more than min')
        return min + Math.round(Math.random() * (max - min))
    }

    getRandomElement = function (array)
    {
        return array[this.getRandomNumber(0, array.length-1)]
    }

    getRandomName = () => {
        let abc = "abcdefghijklmnopqrstuvwxyz";
        let randomName = "";
        while (randomName.length < 6) {
            randomName += abc[Math.floor(Math.random() * abc.length)];
        }
        return randomName;
    }

    getRandomEmail = () => {
        let endings = ["yahoo.com", "rambler.ru", "yandex.ru", "gmail.com"],
            symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";

        function rand(min, max) {
            return (min + Math.random() * (max - min + 1)) | 0
        }

        function getRandomStr(len) {
            let ret = ""
            for (let i = 0; i < len; i++)
                ret += symbols[rand(0, symbols.length - 1)];
            return ret;
        }

        function getEmail() {
            let a = getRandomStr(rand(3, 5)),
                b = getRandomStr(rand(3, 5));
            return a + "." + b + "@" + endings[rand(0, endings.length - 1)];
        }
        getEmail();
    }

    getRandomGender = () => {
        let words = ['male', 'female'];
        let random = Math.floor(Math.random() * ((words.length - 1) + 1));
        return words[random];
    }

    getRandomTitle = () => {
        let words = ['Wage Employee', 'Manager', 'Sales Person', 'Sales Manager'];
        let random = Math.floor(Math.random() * ((words.length - 1) + 1));
        return words[random];
    }


}


