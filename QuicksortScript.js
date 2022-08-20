let inputArea = document.getElementById("inputArea");
let outputArea = document.getElementById("output-log");
let arraySize;
var items = [];
var inputArray = [];

function setup() {
    generateRandomArray();
}
function generateRandomArray() {
    document.querySelectorAll('.block').forEach(i=>i.parentNode.removeChild(i));
    document.querySelectorAll('.output-log').forEach(i=>i.parentNode.removeChild(i));
    arraySize = Number(document.querySelector('.array-size').value);
    for(var j=1; j<=arraySize; j++) {
        var value = Math.floor(Math.random()*100);
        var array_ele = document.createElement("div");
		array_ele.classList.add("block");
        array_ele.innerText = value;
		array_ele.style.height = `${value * 5}px`;
		array_ele.style.transform = `translate(${j * 60}px)`;
		inputArea.appendChild(array_ele);
        }
    updateOutput();

}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}
function play() {
    var select = document.getElementById('speed');
    var value = select.options[select.selectedIndex].value;
    speed = (value.length!=0)  ? (500*value) : 0;
    items = document.querySelectorAll(".block");
    printArray();
    var output = quickSort(items, 0, items.length-1);
}
function debug() {
    items = document.querySelectorAll(".block");
    notSoQuickSort(items, 0, items.length-1);
}
async function swap(items, leftIndex, rightIndex){
    var tempHeight = items[leftIndex].style.height;
    var tempInnerHTML = items[leftIndex].innerHTML;
    // console.log("LeftIndex="+leftIndex+". RightIndex="+rightIndex);
    // console.log("Swapping '"+tempInnerHTML+"' with '"+items[rightIndex].innerHTML+"'");
    if(Number(items[rightIndex].innerHTML)===Number(tempInnerHTML)){}
    else{
    highlightSwap(items[rightIndex].innerHTML,tempInnerHTML);
    output("Swapping '"+tempInnerHTML+"' with '"+items[rightIndex].innerHTML+"'");
    items[leftIndex].style.height = items[rightIndex].style.height;
    items[leftIndex].innerHTML = items[rightIndex].innerHTML;   

    items[rightIndex].style.height = tempHeight;
    items[rightIndex].innerHTML = tempInnerHTML;

    printArray();
    }
    // items = document.querySelectorAll(".block");
}
async function partition(items, left, right) {
    // var pivot   = items[Math.floor((right + left) / 2)],
    //     i       = left, 
    //     j       = right;
    //     pivot.style.backgroundColor = "#00FF00";
    // await sleep(1000);
    // pivot.style.backgroundColor = "#6b5b95";
    // while (i <= j) {
    //     while (Number(items[i].innerHTML) < Number(pivot.innerHTML)) {
    //         i++;
    //     }
    //     while (Number(items[j].innerHTML) > Number(pivot.innerHTML)) {
    //         j--;
    //     }
    //     if (i <= j) {
    //         await swap(items, i, j);
    //         i++;
    //         j--;
    //     }
    // }
    // return i;

    let pivot = items[right];
    let i = (left - 1);
    // console.log(" ");
    pivot.style.backgroundColor = "#00FF00";
    // console.log("Pivot: ",Number(pivot.innerHTML));
    output("-------------------------------");
    output("Pivot= "+Number(pivot.innerHTML)+"; LeftIndex= "+left+"; RightIndex= "+right);
    output("-------------------------------");
    // console.log("LeftIndex= "+left+"; RightIndex= "+right);
    // output("LeftIndex= "+left+"; RightIndex= "+right);
    await sleep(speed);
    // console.log("==============iteration start==================");
    output("=== iteration start ===");
    for (let j = left; j <= right - 1; j++) {
        items[j].style.backgroundColor = "#38d5e0";
        await sleep(speed);
        items[j].style.backgroundColor = "#6b5b95";
        if (Number(items[j].innerHTML) < Number(pivot.innerHTML)) {
            // console.log(items[j].innerHTML+"<"+Number(pivot.innerHTML));
            output(items[j].innerHTML+"<"+Number(pivot.innerHTML));
            i++;
            await swap(items, i, j);
        }
        else{
            // console.log(items[j].innerHTML+">"+Number(pivot.innerHTML));
            output(items[j].innerHTML+">"+Number(pivot.innerHTML));
        }
    }
    // console.log("================iteration end================");
    output("=== iteration end ===");
    // console.log("Iteration complete. Set pivot '"+Number(pivot.innerHTML)+"' at right position.")
    output("Iteration complete. Set pivot '"+Number(pivot.innerHTML)+"' at right position.")
    swap(items, i + 1, right);
    pivot.style.backgroundColor = "#6b5b95";
    await sleep(speed);
    return (i + 1);
}
async function quickSort(items, left, right) {
    // var index;
    // if (items.length > 1) {
    //     index = await partition(items, left, right);
    //     if (left < index - 1) { 
    //         await quickSort(items, left, index - 1);
    //     }
    //     if (index < right) { 
    //         await quickSort(items, index, right);
    //     }
    // }
    // return items;

    if (left < right) {
        let pi = await partition(items, left, right);
        Promise.all([quickSort(items, left, pi - 1), quickSort(items, pi + 1, right)]);
    }
    return items;
}
async function notSoQuickSort(items, left, right) {
    if (left < right) {
        let pi = partition(items, left, right);
        await notSoQuickSort(items, left, pi - 1);
        await notSoQuickSort(items, pi + 1, right);
    }
}
function printArray() {
    var s = [];
    var d = document.querySelectorAll(".block");
    d.forEach(i=>(s.push(Number(i.innerHTML))));
    // console.log("items[] = "+s);
    output("{"+s+"}");
}
async function output(content) {
    var textarea = document.getElementById('output-log');
    textarea.scrollTop = textarea.scrollHeight;
    var data = outputArea.innerHTML;
    data = data+content+"&#13;&#10;";
    outputArea.innerHTML = data;

    updateOutput();
}

function updateOutput() {
    var s = [];
    var d = document.querySelectorAll(".block");
    d.forEach(i=>(s.push(Number(i.innerHTML))));
    var p = document.getElementById('paly-area-p');
    p.innerHTML = " { "+s+" } ";
}

async function highlightSwap(a,b) {
    var p = document.getElementById('swap-area');
    var x = " Swap '"+a+"' , '"+b+"'";
    p.innerHTML =  x;
    p.style.display="block";
    await sleep(1000);
    p.style.display="none";
}

