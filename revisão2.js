let pikavida = 80;
let charmandervida = 80;
let rodada = 0;
let pikaatk= 0;
let charatk= 0;

while(pikavida > 0 && charmandervida > 0 ){
    console.log(`Estamos na rodada ${rodada++}`);
    pikaatk= Math.floor(Math.random()*25);
    charatk=Math.floor(Math.random()*18);
    pikavida=pikavida-charatk;
    charmandervida=charmandervida-pikaatk
    console.log(`O pikachu recebeu ${charatk} de dano restam ${pikavida} de vida⚔️`)
    console.log(`charmander recebeu ${pikaatk} de dano restam ${charmandervida} de vida❤️`);
    console.log("------------------------------------------------------------------");
}
if(pikavida < charmandervida){
    console.log("O charmander ganhou de forma espetacular🔥");
}else if ( pikavida <=0 && charmandervida <= 0){
    console.log("Empate");
}else{
    console.log("Pikachu ganhou com um choque do trovão⛈️");
}