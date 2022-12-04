class Dictionary {
   constructor (name) {
      this.name = name,
      this.words = {}
   }
   add (word, description){
      this.words[word]={word:word, description: description}
   }
   remove (word) {
      delete this.words[word]
   }
   get (description) {
      this.words[description]
   }
   showAllWords (){
  const obj = Object.values (this.words)
   console.log('сортировка', obj);
   }
}

const dictionary = new Dictionary('Толковый словарь');
console.log(dictionary);
console.log('словарь', dictionary.words)
console.log('словарь1', this.words);
// console.log('сортировка',obj);


dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('JavaScript1', 'популярный язык программирования')
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

dictionary.remove('JavaScript');

dictionary.showAllWords();

// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие


// в JavaScript для добавления в объект по динамическому ключу мы можем использовать []. Например:
// const obj = {};
// const dynamicKey = 'name';
// obj[dynamicKey] = 'Elena';

// console.log(obj); // { name: 'Elena' }