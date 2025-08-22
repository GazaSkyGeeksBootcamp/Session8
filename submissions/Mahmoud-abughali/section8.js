// Task1
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle(this.title);
// My answer
console.log(getTitle)



// Task2
const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange(formHandler.onChange);


// My answer
// ❓ Now log formHandler.value
console.log(formHandler.value)
// 1. Predict what formHandler.value will be.
// initial
// 2. Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value)
// 3. Explain which fix you used and why.
// i've used bind() to ensure the 'this' inside formHandler.onChange refers correctly to the formHandler object


// Task3

const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};


// My answer
const logLanguageInfo = (item) => {
  console.log(item.call(translator))
}

logLanguageInfo(translator.getLanguage);


