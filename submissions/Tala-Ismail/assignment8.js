//Task 1: Fix the Lost Context
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor);

console.log(getTitle()); 

//Task2: Arrow or Regular? 
const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange((value) => formHandler.onChange(value));

console.log(formHandler.value); 

//Task3: Method Extraction Issue
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

function logLanguageInfo(getter) {
  console.log( getter.call(translator));
}

logLanguageInfo(translator.getLanguage);