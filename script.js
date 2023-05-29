const array = [
    
    {
        nome: " Wayne " ,
        cognome: " Barnett " ,
        ruolo: " Founder & CEO " ,
        foto: " "

    },

    {
        nome: " Angela " ,
        cognome: " Caroll " ,
        ruolo: " Chief Editor " ,
        foto: " "

    },

    {
        nome: " Walter " ,
        cognome: " Gordon " ,
        ruolo: " Official manager " ,
        foto: " "

    },

    {
        nome: " Angela" ,
        cognome: " Lopez " ,
        ruolo: " Social media manager " ,
        foto: " "

    },

    {
        nome: " Scott " ,
        cognome: " Estrada " ,
        ruolo: " Developer " ,
        foto: " "

    },

    {
        nome: " Barbara " ,
        cognome: " Ramos " ,
        ruolo: " Graphic designer " ,
        foto: " "

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


