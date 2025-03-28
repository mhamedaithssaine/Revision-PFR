# Semaine 1 : Fondations

## Jour 1 : Bases de programmation - Variables et types de données

### Description rapide

L'objectif du jour est de comprendre les variables et les types de données en JavaScript. Une variable est un conteneur pour stocker des données, déclaré avec `let` (modifiable), `const` (constante) ou `var` (ancienne syntaxe). Les types de données principaux sont : `string` (texte), `number` (nombre), `boolean` (vrai/faux), `array` (tableau), et `object` (objet).

### Documentation

- [MDN - Variables](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_types#variables)
- [W3Schools - Types de données](https://www.w3schools.com/js/js_datatypes.asp)

### Exercices

#### Faciles

1. Déclarez une variable `nom` avec votre nom et affichez-la dans la console avec `console.log(nom)`.
2. Créez une constante `age` avec votre âge et affichez-la.
3. Déclarez une variable `estEtudiant` avec `true` si vous êtes étudiant, sinon `false`, et affichez-la.

#### Moyens

4. Créez deux variables numériques `a` et `b`, additionnez-les et affichez le résultat.
5. Concaténez deux chaînes de caractères (votre prénom et nom) dans une variable `nomComplet` et affichez-la.
6. Convertissez la chaîne `"10"` en nombre avec `parseInt()` ou `Number()`, ajoutez-la à un autre nombre, et affichez le résultat.
7. Créez un tableau `fruits` avec trois fruits de votre choix et affichez-le.

#### Difficiles

8. Créez un objet `personne` avec les propriétés `nom`, `age` et `ville`, puis affichez chaque propriété avec `console.log()`.
9. Déclarez une variable `let compteur = 5`, modifiez sa valeur à `10`, et affichez-la avant et après la modification.
10. Essayez de modifier une constante (ex. `const x = 5`) et observez l'erreur dans la console.

---

## Jour 2 : OOP - Introduction aux classes et objets

### Description rapide

L'objectif est de comprendre les bases de la programmation orientée objet (OOP) en JavaScript avec les classes et les objets. Une classe est un modèle pour créer des objets, définie avec `class NomClasse {}`. On instancie un objet avec `new NomClasse()`.

### Documentation

- [MDN - Classes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)
- [W3Schools - Classes](https://www.w3schools.com/js/js_classes.asp)

### Exercices

#### Faciles

1. Définissez une classe vide appelée `Voiture` avec `class Voiture {}`.
2. Créez un objet `maVoiture` à partir de cette classe avec `new Voiture()` et affichez-le.
3. Ajoutez une propriété `marque` à la classe `Voiture`, instanciez un objet avec `marque = "Toyota"`, et affichez la marque.

#### Moyens

4. Créez une classe `Animal` avec une propriété `nom`, et instanciez deux animaux (ex. "Lion", "Chat") en affichant leurs noms.
5. Ajoutez une méthode `parler()` à `Animal` qui affiche "L'animal fait un son", et appelez-la pour un objet.
6. Créez une classe `Rectangle` avec les propriétés `longueur` et `largeur`, et instanciez un rectangle (ex. 5 et 3).
7. Ajoutez une méthode `aire()` à `Rectangle` qui retourne `longueur * largeur`, et affichez l'aire d'un rectangle.

#### Difficiles

8. Créez une classe `Personne` avec un constructeur `constructor(nom, age)` qui initialise ces propriétés, et instanciez une personne.
9. Instanciez deux objets `Personne` (ex. "Alice", 25 et "Bob", 30), et affichez leurs propriétés.
10. Ajoutez une méthode `saluer()` à `Personne` qui affiche "Bonjour, je m'appelle [nom]", et testez-la.

---

## Jour 3 : SQL - Requêtes SELECT de base

### Description rapide

L'objectif est d'apprendre à écrire des requêtes `SELECT` simples pour récupérer des données dans une base SQL. La syntaxe de base est `SELECT colonne FROM table WHERE condition`. On utilise cela pour interroger des tables comme `employes`.

### Documentation

- [W3Schools - SELECT](https://www.w3schools.com/sql/sql_select.asp)
- [SQLZoo - SELECT](https://sqlzoo.net/wiki/SELECT_basics)

### Exercices (sur une table `employes` avec `id`, `nom`, `salaire`, `departement`)

#### Faciles

1. Écrivez une requête pour sélectionner tous les employés.
2. Sélectionnez uniquement les noms des employés.
3. Sélectionnez les employés du département "IT".

#### Moyens

4. Sélectionnez les employés avec un salaire supérieur à 3000.
5. Sélectionnez les noms et salaires des employés du département "RH".
6. Sélectionnez les employés dont le nom commence par "A".
7. Sélectionnez les employés avec un salaire entre 2000 et 4000.

#### Difficiles

8. Sélectionnez les employés triés par salaire décroissant.
9. Sélectionnez le nom et le département des employés avec un salaire > 2500 et du département "IT".
10. Sélectionnez les employés dont le nom contient "e" et le département est "Finance".

---

## Jour 4 : JavaScript - Fonctions

### Description rapide

L'objectif est de maîtriser les fonctions en JavaScript, qui sont des blocs de code réutilisables. Une fonction peut prendre des paramètres et retourner une valeur avec `return`. Syntaxe : `function nom(param) { code }`.

### Documentation

- [MDN - Fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions)
- [W3Schools - Fonctions](https://www.w3schools.com/js/js_functions.asp)

### Exercices

#### Faciles

1. Créez une fonction `bonjour()` qui affiche "Bonjour !" avec `console.log()`.
2. Créez une fonction `addition(a, b)` qui retourne la somme de deux nombres, et testez-la.
3. Appelez `addition(3, 5)` et affichez le résultat dans la console.

#### Moyens

4. Créez une fonction `estPair(nombre)` qui retourne `true` si le nombre est pair (`nombre % 2 === 0`), et testez-la.
5. Créez une fonction `factorielle(n)` qui calcule la factorielle d'un nombre (ex. 5! = 5×4×3×2×1) avec une boucle.
6. Créez une fonction `maximum(a, b)` qui retourne le plus grand des deux nombres avec `if`.
7. Créez une fonction `bienvenue(nom)` qui affiche "Bienvenue, [nom] !", et testez-la avec votre nom.

#### Difficiles

8. Créez une fonction `sommeTableau(tableau)` qui prend un tableau de nombres et retourne leur somme avec une boucle.
9. Créez une fonction `inverserChaine(chaine)` qui retourne la chaîne inversée (ex. "abc" → "cba") avec une boucle ou `split()`.
10. Créez une fonction `estPalindrome(chaine)` qui vérifie si une chaîne est un palindrome (ex. "radar") et retourne `true` ou `false`.

---

## Jour 5 : UML - Diagrammes de use case (introduction)

### Description rapide

L'objectif est d'apprendre les bases des diagrammes de use case en UML, qui montrent les interactions entre acteurs (utilisateurs) et un système. Les acteurs sont des stickmans, les use cases des ellipses reliées par des lignes.

### Documentation

- [Lucidchart - Use Case](https://www.lucidchart.com/pages/fr/diagramme-de-cas-d-utilisation-uml)
- [Visual Paradigm - Use Case](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/)

### Exercices

#### Faciles

1. Dessinez un acteur nommé "Client" (stickman avec le label en dessous).
2. Dessinez un use case "Se connecter" (ellipse avec le texte dedans).
3. Reliez l'acteur "Client" au use case "Se connecter" avec une ligne droite.

#### Moyens

4. Ajoutez un use case "Consulter le solde" et reliez-le à "Client".
5. Ajoutez un acteur "Administrateur" et un use case "Gérer les utilisateurs", puis reliez-les.
6. Dessinez un use case "Effectuer un paiement" pour "Client".
7. Reliez "Administrateur" à un use case "Générer un rapport".

#### Difficiles

8. Dessinez un diagramme avec deux acteurs "Étudiant" et "Professeur", chacun avec deux use cases (ex. "Suivre un cours", "Noter les étudiants").
9. Ajoutez une relation `<<include>>` entre "Se connecter" et "Consulter le solde" (flèche en pointillés).
10. Créez un diagramme pour une bibliothèque avec les acteurs "Bibliothécaire" (ex. "Ajouter un livre") et "Utilisateur" (ex. "Emprunter un livre").
