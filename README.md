# QuickSort Algorithm
Quicksort is one of the divide and conquer algorithm used to quickly sort an array for instance using partitioning method. Quicksort algorithm selects an element as pivot and perform sorting by partitioning around the selected pivot according to whether they are less than or greater than pivot. 
Choosing a pivot is crucial. Choice of pivot can either be dependent on partition routine or can be completely random. 

Here in this project, let us take the last element of the array as pivot.

![Quicksort](https://github.com/RohithChevvakula/Quicksort-Visualization/blob/main/Picture1.jpg)
### pseudo code for QuickSort function:
```JavaScript
/* low  –> Starting index,  high  –> Ending index */
quickSort(arr[], low, high) {
   if (low < high) {
        /* pi is partitioning index, arr[pi] is now at right place */
        pi = partition(arr, low, high);
        quickSort(arr, low, pi – 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}
```

### pseudo code for partition technique:
```JavaScript
partition(arr, beg, end) {
  set end as pivotIndex
  pIndex = beg - 1
  for i = beg to end-1 {
  if arr[i] < pivot
    swap arr[i] and arr[pIndex]
    pIndex++
    }
  swap pivot and arr[pIndex+1]
return pIndex + 1
}
```

Quicksort is performed by first partitioning the given array and then placing elements smaller than pivot before it and elements greater than pivot are placed after it. This action is recursive in nature. The sub-arrays are sorted again and again until we get a sorted array. 
