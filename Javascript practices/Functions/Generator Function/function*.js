function* generator(){
    yield 'First';
    yield 'Second'
    yield 'Third';
}

const gen = generator()

console.log(gen.next().value);
console.log(gen.next().done);
console.log(gen.next());