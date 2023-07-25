document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animated", {
        speed: 300,
        loop: true
    }).type('FALTAM 7 DI', {delay:1000}).delete(4).type(`${dias} DIAS!!!`, {delay:1000}).delete(16).type('VAMOS JUNTOS???', {delay:1000})
    
    .go()
})

var date = new Date();
var dias = 25;

if (dias === 25) {
  dias = "3";
} else if (dias === 26) {
  dias = "2";
} else if (dias === 27) {
  dias = "1";
}

console.log(dias);