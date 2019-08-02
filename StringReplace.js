const message = "Ceci est un test";

console.log(message.replace("test", "message"));
// Affichera : Ceci est un message

console.log(message.replace("test", "$& (String recherchée : $&)"));
// Affichera : Ceci est un test (String recherchée : test)
// $& représente la chaîne recherchée

console.log(message.replace("un", "$`"));
// Affichera : Ceci est Ceci est  test
// $` représente la chaîne qui précède le match

console.log(message.replace("un", "$'"));
// Affichera : Ceci est  test test
// $' représente la chaîne qui suit le match