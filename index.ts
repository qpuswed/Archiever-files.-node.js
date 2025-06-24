function getNum(message: string): number {
    const ask = prompt(message)
    if (ask === null  || isNaN(Number(ask))){
        throw new Error("Невверный ввод, введите число")
    }
    return Number(ask)
}
function calc(a: number, b: number, operation: string): number | string {
    switch (operation){
        case '1':
            return a + b;
        case '2':
            return a - b;
        case '3':
            return a * b;
        case '4':
            return a / b;  
        case '5':
            return a ** b;
        default:
            return "Не вверный ввод"
    }
}

function do_calc(){ 
    while (true){
        var a = getNum("Введите число a")
        var b = getNum("Введите число b")
        console.log(`Ваши значения: a = ${a}, b = ${b}`);
        console.log("1. +");
        console.log("2. -");
        console.log("3. *");
        console.log("4. /");
        console.log("5. **");
        var operation = prompt("Введите запрос:")
        if (operation === null){
            console.log("Операция отменена")
            return
        }
        else if (operation === "4" && b === 0){
            console.log("На 0 делить нельзя")
            continue
        }

        const result = calc(a, b, operation);
        console.log("Результат: ", result);
        break
}
}

function repeat_quest() {
    while (true){
    console.log("1. Да")
        console.log("2. Нет")
        const repeat = Number(prompt("Хотите повторить?"))
        if (repeat === 1) {
            continue
        }
        else if ( repeat === 2) {
            console.log("Выход");
            break
        }
        else {
            console.log("Невверный ввод")
            continue
        }
    }
}

function main() {
    while (true) {
        do_calc();
        repeat_quest();
        }
    }
main();