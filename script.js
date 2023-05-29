const array = [
    
    {
        nome: " Wayne Barnett " ,
        ruolo: " Founder & CEO " ,
        foto: " wayne-barnett-founder-ceo.jpg "

    },

    {
        nome: " Angela Caroll " ,
        ruolo: " Chief Editor " ,
        foto: " angela-caroll-chief-editor.jpg "

    },

    {
        nome: " Walter Gordon " ,
        ruolo: " Official manager " ,
        foto: " walter-gordon-office-manager.jpg "

    },

    {
        nome: " Angela Lopez " ,
        ruolo: " Social media manager " ,
        foto: " "

    },

    {
        nome: " Scott Estrada " ,
        ruolo: " Developer " ,
        foto: " angela-lopez-social-media-manager.jpg "

    },

    {
        nome: " Barbara Ramos " ,
        ruolo: " Graphic designer " ,
        foto: " barbara-ramos-graphic-designer.jpg "

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


