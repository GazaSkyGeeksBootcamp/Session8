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

// ✅ الحل باستخدام Arrow Function بدون تعديل الكائن
simulateInputChange((newVal) => formHandler.onChange(newVal));

console.log(formHandler.value); 



// لما تستخدم arrow function، الـ this ما بيكونش خاص فيها
// بل بياخذ this من السياق الخارجي (اللي حواليها).
// عشان هيك، this.value ممكن ما يشتغلش صح داخل arrow function
// لو كنت بتتوقع this تشير للكائن نفسه.

// لكن لما تستخدم دالة عادية (function) أو تستخدم bind,
// this بيشير للكائن الصحيح، واللي بدك تتعامل معه.




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
