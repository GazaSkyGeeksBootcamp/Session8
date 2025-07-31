// Task 1
const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

const getTitle = editor.getUpperTitle.bind(editor);

console.log(getTitle());
//"MY FIRST BLOG"

// Task 2
const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

function simulateInputChange(callback) {
  callback("updated");
}

simulateInputChange(formHandler.onChange);

// اذا مررنا الدالة مباشرة سيتم فقدان this
simulateInputChange(formHandler.onChange);
console.log("Without fix:", formHandler.value); 
// "initial"

// Using bind()
const formHandler1 = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

simulateInputChange(formHandler1.onChange.bind(formHandler1));
console.log("Using bind():", formHandler1.value); 
// "updated"


// Using Arrow Function
const formHandler2 = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

simulateInputChange((val) => formHandler2.onChange(val));
console.log("Using Arrow Function:", formHandler2.value); 
// "updated"


// Task 3
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

function logLanguageInfo(getter) {
  console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage);
// "Current language: Arabic"
