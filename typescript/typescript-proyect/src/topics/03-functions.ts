
function addNumbers(a: number, b:number) {

    return a + b;
};

const result: number = addNumbers(5,2).toString();


const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

const result2: string = addNumbersArrow(6 , 3);



function multiply( firstNumber: number, secondNumber?: number, base:number = 2) {
    return firstNumber  * base;
}

const multiplyResoult = multiply(5);




console.log({multiplyResoult});