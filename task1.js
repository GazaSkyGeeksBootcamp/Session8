//Task 1: Fix the Lost Context


const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor);

console.log(getTitle());  

//Task 2: Arrow or Regular?

const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange(formHandler.onChange.bind(formHandler));

console.log(formHandler.value);  


//Task 3: Method Extraction Issue

const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

// الاختبار
logLanguageInfo(translator.getLanguage); 
