type UserType37 = {
    name: string,
    age: number,
    status: boolean,
}

let users37: UserType37[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// 1️⃣ пользователи со статусом true
console.log('Користувачі зі статусом TRUE:');
for (const user of users37) {
    if (user.status) {
        console.log(user);
    }
}

// 2️⃣ пользователи со статусом false
console.log('Користувачі зі статусом FALSE:');
for (const user of users37) {
    if (!user.status) {                 // или if (user.status === false) {
        console.log(user);
    }
}

// 3️⃣ пользователи старше 30 лет
console.log('Користувачі старші за 30 років:');
for (const user of users37) {
    if (user.age > 30) {
        console.log(user);
    }
}