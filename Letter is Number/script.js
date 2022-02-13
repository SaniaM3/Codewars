//Каждая буква превращается в цифру в алфавите.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    return text.split('').filter(v=>/[a-zA-Z]/
        .test(v)).map(v=>v.toLowerCase().charCodeAt(0)-96).join(' ');
  }
