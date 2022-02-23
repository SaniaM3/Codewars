// Напишите функцию, которая при задании URL-адреса 
// в виде строки анализирует только доменное имя и возвращает 
// его в виде строки. Например:
// domainName("http://github.com/carbonfive/raygun") == "github" 

function domainName(url){
    let sourceString = url.replace('http://','')
    .replace('https://','').replace('www.','').split(/[/?#]/)[0];
     let domain = sourceString.split(".")[0];
     return domain;
}

//replace - заменитель replace(Выражение, На что меняем)