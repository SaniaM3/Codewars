// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str){
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
    }