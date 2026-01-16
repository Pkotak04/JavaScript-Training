// object literals

// let user = {
//     name: 'param',
//     age: 30,
//     email: 'pkotak@academic.rrc.ca',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// //user.age = 35;
// console.log(user.age);

// const key = 'location';

// console.log(user['location']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

//console.log(blogs);

let user = {
    name: 'param',
    age: 30,
    email: 'pkotak@academic.rrc.ca',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
//console.log(this);

// user.login();
// user.logout();

// const namee = 'mario';
// namee.toUpperCase();


