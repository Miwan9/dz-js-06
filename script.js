let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o',
        'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    setCharCount: function () {
        let k=0;
        let result;
        while(k==0) {
            result = prompt(`Введите целое число:`);
            if(this.checkPositiveInteger(result)) {
                this.charCount = result;
                k=1;
            }
            else if(result === null) k=1;
            else {
               k=0;
            }
        }
        document.getElementById('chars').innerHTML = `Дана строка: <b>[ ${this.chars} ]</b>`;
        document.getElementById('charCount').innerHTML = `Вы ввели число: <b>${this.charCount}</b>`;
        return result;
    },
    checkPositiveInteger: function (response) {  //проверяет является ли число целым положительным числом
        if (response>0 && parseInt( response ) == response) flag = true;
        else flag = false; // меньше нуля и не целое
        return flag;
    },
    task: [],
    createTask: function () {  // создает новый массив длинной из charCount и заполняет его случайными буквами из массива chars
        const getRandomInt = (min, max) => {   // рандом целых чисел
            return Math.floor(Math.random() * (max - min)) + min;
        }

        lengthNewArr = +this.charCount;
        for(let i=0; i<lengthNewArr; i++) {
            randInx = getRandomInt(0, keyTrainer.chars.length);
            this.task.push(this.chars[randInx]);
        }
    },

    starTask: function () {
        let inputStr = this.userInput = prompt(`Наберите строку которая введена в поле input:`, `${this.task}`);
        let randStr = this.task.join(',');
        let maxStr;

        if(inputStr !== null) { //отлавливаем ошибки

            maxStr = Math.max(inputStr.length, randStr.length);
            document.getElementById('task').innerHTML = `Случайная строка из ${this.charCount} символов: <b>[ ${this.task} ]</b>`;
            document.getElementById('inputStr').innerHTML = `Введенная вами строка: <b>[ ${inputStr} ]</b>`;

            console.log(`Cлучайная строка: ${randStr}`);  // случайная строка
            console.log(`Введенная строка: ${inputStr}`); // введенная строка

            for (let i = 0; i < maxStr; i++) {
                if (inputStr[i] !== randStr[i]) {
                    this.userError++;
                }
            }
            if (this.userError == 0) {
                console.log(`Поздравляю строки совпадают, количество ошибок ${this.userError}!`);
                document.getElementById('userError').innerHTML = `Поздравляю строки совпадают, количество ошибок <b>${this.userError}</b>!`;
            }
            else {
                console.log(`Вы допустили: ${this.userError} ошибок(ки).`);
                document.getElementById('userError').innerHTML = `Вы допустили: <b>${this.userError}</b> ошибок(ки).`;
            }
        }
        else inputStr='';
    },
    userInput: '',
    userError: 0
};

let run = () => {
    keyTrainer.setCharCount();
    keyTrainer.createTask();
    keyTrainer.starTask();
    console.log(keyTrainer);
    document.getElementById('keyTrainer').innerHTML = `Объект <b>keyTrainer</b> - заполнен!`;
}
run();