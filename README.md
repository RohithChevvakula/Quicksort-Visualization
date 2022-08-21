# QuickSort Algorithm Visualization 
Quicksort is performed by first partitioning the given array and then placing elements smaller than pivot before it and elements greater than pivot are placed after it. This action is recursive in nature. The sub-arrays are sorted again and again until we get a sorted array. 
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
> Here in this project, let us take the last element of the array as pivot.

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

## How to use this project to visualize Quicksort algorithm?
> Download this project as zip and unzip
> Open the file 'Quicksort.html' in a browser

### Once you see the web page:
There are different options on screen. 
1. To select size of the array
2. To generate the random integers of size choosen above
3. To control the speed of the animation
4. To sort the random array
5. Output window to see what is happening

## Watch how to use this project to visualize quicksort algorithm: https://youtu.be/aK4l32kQREQ

> Have fun!


