const skills:string[] = ['bash', 'counter', 'healing'];





//Objeto.

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;//Opcional
}


const strider:Character = {
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'counter'],
};

strider.hometown = 'Rivendel';

console.table(strider);