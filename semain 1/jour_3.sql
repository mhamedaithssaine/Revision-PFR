/**
* Exercices (sur une table employes avec id, nom, salaire, departement)
*/


 /** 
 * faciles
*/


-----------8-----------

select * from employes;

------------9-----------
select nom from employes;

-------------10-----------
select * from employes 
where departement IN('IT') || departement = "IT";

/** 
 * Moyen 
*/

---------------8--------
select * from emplyes 
WHERE salaire>3000;

-----------9------------

SELECT nom, salaire FROM employes 
WHERE departement = "RH" || departement IN('RH');

----------------10--------
SELECT * FROM employes 
WHERE nom like 'A%';

--------------11-------------
SELECT * from employes
WHERE salaire BETWEEN 2000 and 4000;

/** 
 * dificile 
*/
-----------8----------
SELECT * FROM employes
ORDER BY salaire DESC;

-----------9---------
SELECT nom, departement FROM employes
WHERE salaire>2500 and departement="IT";

----------------------10-------------
SELECT * FROM employes 
where nome like '%e%' and departement="Finance";