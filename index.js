// // const matchs = [
// //     { equipeA: "Barcelone", equipeB: "Real Madrid", scoreA: 3, scoreB: 2 },
// //     { equipeA: "Chelsea", equipeB: "Man City", scoreA: 1, scoreB: 2 },
// //     { equipeA: "Bayern", equipeB: "Dortmund", scoreA: 4, scoreB: 1 },
// //     { equipeA: "PSG", equipeB: "Marseille", scoreA: 2, scoreB: 2 }
// //   ];


// //   const equipes = matchs.flatMap(match => [
// //       match.scoreA > 2 ? match.equipeA : null,
// //       match.scoreB > 2 ? match.equipeB : null
// //   ])
// //   .filter(equipe => equipe !== null); 

// // console.log(equipes);


// // const joueurs = [
// //     { nom: "Messi", maillot: 10 },
// //     { nom: "Ronaldo", maillot: 7 },
// //     { nom: "Neymar", maillot: 10 },
// //     { nom: "Mbappé", maillot: 7 }
// //   ];

// //   const ronal = joueurs.find(j => j.maillot === 7);

// // console.log(ronal);




// // function filterEvenNumbers(numbers) {
// //   return numbers.filter(j => j % 2 === 0);
// // }



// // Test
// // const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const numbe = inputArray.filter(j=>j%2===0);
// // console.log(numbe);

// // const joueurs = ["mESSI", "roNALdo", "neYMAR", "MbappE"];

 

// // const new1 = joueurs.map(j=>{
// //   return j.charAt(0).toUpperCase() + j.slice(1).toLowerCase();
// // })


// // console.log(new1);

// // const matchs = [
// //     { equipeA: "Barcelone", equipeB: "Real Madrid", scoreA: 3, scoreB: 2 },
// //     { equipeA: "Chelsea", equipeB: "Man City", scoreA: 1, scoreB: 3 },
// //     { equipeA: "Bayern", equipeB: "Dortmund", scoreA: 4, scoreB: 1 },
// //     { equipeA: "PSG", equipeB: "Marseille", scoreA: 2, scoreB: 2 }
// //   ];

// // const a=matchs.filter(p=>p.scoreA>2||p.scoreB>2);
// // console.log(a);



// // Exercice 3 : Recherche dans un tableau
// // Tu as un tableau contenant des numéros de maillots de joueurs. 
// // Trouve la première occurrence du numéro 10 dans le tableau.


// // const maillots = [7, 11, 10, 9, 10, 8, 10];
// // const count=(arr,number)=>{
// // let occ=0;
// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]==number){
// //         occ++;
// //     }
// // }
// // return occ;
// // }
// // console.log(count(maillots,10));

// const nombres = [1, 2, 3, 4];

// const somme = nombres.reduce((acc, n) => acc + n,0);
// console.log(somme); // 10


// // // Ton code ici
// // Exercice 4 : Trouver un élément spécifique
// // Tu as un tableau d’objets représentant des joueurs avec leur numéro de maillot.
// //  Trouve le premier joueur qui porte le maillot numéro 7.
// // const joueurs = [
// //   { nom: "Messi", maillot: 10 },
// //   { nom: "Ronaldo", maillot: 7 },
// //   { nom: "Neymar", maillot: 10 },
// //   { nom: "Mbappé", maillot: 7 }
// // ];




// // Exercice 5 : Modification d’un tableau
// // Tu as une liste de prix en euros. Augmente chaque prix de 10%.


// // const prix = [100, 200, 50, 75, 120];
// // // Ton code ici
// // Exercice 6 : Extraction de valeurs
// // Tu as un tableau d’objets représentant des joueurs de football.
// //  Crée un nouveau tableau contenant uniquement leurs noms.


// // const joueurs = [
// //   { nom: "Messi", equipe: "Inter Miami" },
// //   { nom: "Ronaldo", equipe: "Al Nassr" },
// //   { nom: "Neymar", equipe: "Al Hilal" },
// //   { nom: "Mbappé", equipe: "PSG" }
// // ];
// // // Ton code ici
// // Exercice 7 : Trouver la position d’un élément
// // Tu as une liste d'équipes de football. Trouve la position du "Real Madrid" dans le tableau.


// // const equipes = ["PSG", "Barcelone", "Real Madrid", "Chelsea", "Bayern"];
// // // Ton code ici
// // Exercice 8 : Suppression d’éléments
// // Tu as un tableau contenant des noms de joueurs, certains noms sont en double.
// //  Crée un tableau où chaque joueur apparaît une seule fois.


// // const joueurs = ["Messi", "Ronaldo", "Neymar", "Messi", "Mbappé", "Neymar"];
// // // Ton code ici