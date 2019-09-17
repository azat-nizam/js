// Функция-конструктор
var Friend = function(name, password, interests, job){
    this.fullName = name;
    this.password = password;
    this.interests = interests;
    this.job = job;

    this.greeting = function() { 
        return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`;
    }
};

// Мы можем создать один или несколько экземпляров объекта типа Friend, используя ключевое слово new
var john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher'); 
var azat = new Friend('Azat Nizameev', '2121212', ['hiking'], 'developer');

// console.log(azat);

// Назначим функцию ключу greeting объекта john
/*john.greeting = sayHello;
azat.greeting = sayHello;*/

// Вызовем новый метод объекта
console.log( john.greeting() );
console.log( azat.greeting() );

// Помните о том, что sayHello() не стоит вызывать как обычную функцию
// console.log( sayHello() ) ;