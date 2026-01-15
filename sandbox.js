// object literals

let user = {
    name: 'param',
    age: 30,
    email: 'pkotak@academic.rrc.ca',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

//user.age = 35;
console.log(user.age);

const key = 'location';

console.log(user['location']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);