/*
Exercice 3 — Supprimer une valeur

Énoncé :
Supprimer toutes les occurrences de val dans nums en place.
Retourner k = nombre d'éléments restants.
Les k premiers éléments de nums doivent être ceux conservés.
*/

function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}


// --------------------
// Tests (au moins 3)
// --------------------
let t1 = [3, 2, 2, 3];
console.log(removeElement(t1, 3)); // attendu: 2
console.log(t1); // attendu: commence par [2,2,...]

let t2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(t2, 2)); // attendu: 5
console.log(t2); // attendu: commence par [0,1,3,0,4,...]

let t3 = [];
console.log(removeElement(t3, 1)); // attendu: 0 (cas limite)
