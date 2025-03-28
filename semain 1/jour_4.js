/** 
 * faciles
*/

//------------8------------
function bonjour(){
    return console.log('Bonjour !');
    
}
// bonjour();


//-------------9-----------
function addition(a,b){
    return a+b;
}

//-------------10---------
// console.log(addition(5,2));




/** 
 * Moyens
*/

//-------------8---------

function estPair(n){
    if(n % 2 ===0){
          return true;
    }else return false;
}

// console.log(estPair(8));

//------------------9-------------
 let factorielle = (n)=>{
    let fact=1;
    if (n===0){
        return 1;
    }
    for(let i=1;i<=n;i++){
          fact *=i;
    }
    return fact;
 }
//  console.log (factorielle(5));


//-----------------10---------
let maximun = (x,y)=>{
    if(x-y>0){
        return console.log("le maximum est :"+x);
    }else{
        return console.log("le maximum est :"+y);

    }
}

// maximun(1,2);

//----------11----------
function bienvenue(nom){
    return console.log(`Bienvenue, ${nom}`);
}

// bienvenue("khalid");


/** 
 * difficiles
*/



//-------8----------

function someTableau(tab){
    
     let somme = 0;
     for( let i=0;i<tab.length; i++ ){
        somme +=tab[i];
     }
     return somme;
}
let tab = [1,2,3,6,7];
// console.log(someTableau(tab));


//-----9------------
// function inverserChaine(chaine){
//     return chaine.split('').reverse().join('');
// }

// console.log(inverserChaine("abc"));

function inverserChaine(chaine){
 let reverse = "" ;

 for(let i=chaine.length-1;i>=0;i-- ){
     reverse +=chaine[i];
 }
 return reverse;
}

// console.log(inverserChaine("abc"));


//--------10--------------

function estPalindrome(Stri){
    let reverStri = "";
   
    for(let j=Stri.length-1;j>=0;j--){
     reverStri +=Stri[j] ;
    }
   
    if(Stri===reverStri){
        return `Le mots ${Stri} est palindrome  `;
    }else{
         return false ;
    }
   
}


// console.log(estPalindrome("radar"));


