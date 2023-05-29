const array = [
    
    {
        nome: " Wayne " ,
        cognome: " Barnett " ,
        ruolo: " Founder & CEO " ,

    },

    {
        nome: " Angela " ,
        cognome: " Caroll" ,
        ruolo: " Chief Editor " ,

    },

    {
        nome: " Walter " ,
        cognome: "Gordon " ,
        ruolo: " Official manager " ,

    },

    {
        nome: " Angela" ,
        cognome: " Lopez" ,
        ruolo: "Social media manager" ,

    },

    {
        nome: " Scott " ,
        cognome: " Estrada " ,
        ruolo: " Developer " ,

    },

    {
        nome: " Barbara " ,
        cognome: " Ramos" ,
        ruolo: " Graphic designer " ,

    }

]

console.log(array);
const p = document.querySelector('p');

for (let i = 0 ; i < array.length - 1 ; i = i + 1){
    const listainfo = array[i];
    for (let key in listainfo){
        console.log(key , listainfo[key]);
        p.append(key,listainfo[key]);
    };
    
}


