/*
Exercice 2 — Permutation suivante

Énoncé :
Écrire nextPermutation(nums) qui modifie nums sur place pour obtenir la permutation suivante
dans l'ordre lexicographique. Si nums est la dernière permutation, la transformer en plus petite
(permutation triée en ordre croissant).
*/

function nextPermutation(nums) {
  // 1. Trouver l'index i où nums[i] < nums[i + 1] en partant de la fin
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // 2. Si on a trouvé un tel i, trouver à droite un élément juste plus grand et échanger
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  // 3. Inverser la partie à droite de i (ou tout le tableau si i == -1)
  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}



// --------------------
// Tests (au moins 3)
// --------------------
let a = [1, 2, 3];
nextPermutation(a);
console.log(a); // attendu: [1,3,2]

let b = [3, 2, 1];
nextPermutation(b);
console.log(b); // attendu: [1,2,3]

let c = [1, 1, 5];
nextPermutation(c);
console.log(c); // attendu: [1,5,1]
