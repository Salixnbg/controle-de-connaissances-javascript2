/*
Exercice 1 — Médiane de deux tableaux triés

Énoncé :
On te donne deux tableaux de nombres triés nums1 et nums2.
Retourner la médiane de l'ensemble des valeurs des deux tableaux réunis.

Rappel :
- Total impair -> élément du milieu
- Total pair -> moyenne des 2 éléments du milieu
*/

function findMedianSortedArrays(nums1, nums2) {
  let i = 0;
  let j = 0;
  let previous = 0;
  let current = 0;

  let totalLength = nums1.length + nums2.length;
  let middleIndex = Math.floor(totalLength / 2);

  for (let count = 0; count <= middleIndex; count++) {
    previous = current;

    if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
      current = nums1[i];
      i++;
    } else {
      current = nums2[j];
      j++;
    }
  }

  // Total impair
  if (totalLength % 2 !== 0) {
    return current;
  }

  // Total pair
  return (previous + current) / 2;
}


// --------------------
// Tests (au moins 3)
// --------------------
console.log(findMedianSortedArrays([1, 3], [2])); // attendu: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // attendu: 2.5
console.log(findMedianSortedArrays([], [1])); // attendu: 1 (cas limite)
