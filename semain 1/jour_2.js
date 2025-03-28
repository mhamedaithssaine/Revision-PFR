 /** 
 * faciles
*/
//-----------8-----------
class voiture{};
//--------------9-------------
let MaVoiture = new voiture();

// console.log(MaVoiture);

// ----------10-----------

class voiture1{
    constructor(marque){
                this.marque=marque;
    }
}

const marque="Toyota";
const MaVoiture1=new voiture1(marque);
// console.log(MaVoiture1);

 /** 
 * Moyens 
*/

//----------8----------
class animal{
    constructor(nom){
        this.nom=nom;
    }

    parle(){
        return console.log(`${this.nom}`);
        ;
    }
}

let Lion="Lion";
let Chat="chat";
const MonAnimale1 = new animal(Lion);
const MonAnimale2 = new animal(Chat);

// console.log("Mon Permier Animal: "+MonAnimale1.nom+", Mon Deuxiem Animal: " + MonAnimale2.nom);


//--------------9------------
// let parle = new animal("L'animal fait un son");
// parle.parle();

//-----------------10------------------

class rectongle{
    constructor(longueur,largeur){
            this.longueur=longueur;
            this.largeur=largeur;
    }

    aire(){
        return this.longueur * this.largeur;
    }
}

// instance 
let MaRectongle = new rectongle(5,3);


//------------------11--------------

let aireRectongle = MaRectongle.aire();
// console.log(aireRectongle);


 /** 
 * Dificiles 
*/

//--------------8----------
class perssone{
    constructor(nom,age){
        this.nom=nom;
        this.age=age;
    }

    saluer(){
        return `Bonjoure, je m'appelle ${this.nom}`;
    }
}

let PermierPersonne = new perssone("alex",24);

//---------9---------

let perssone1 = new perssone("alex",25)
let perssone2 = new perssone("Bob",30)

// console.log(`Premier Personne est : ${perssone1.nom}, ${perssone1.age} ans,`, 
//     `Deuxième Personne est : ${perssone2.nom}, ${perssone2.age} ans`);

//----------10-------------
console.log(perssone1.saluer());
