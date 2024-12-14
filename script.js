function mincost(arr) {
    const minHeap = new MinHeap();
    let totalCost = 0;


    for (const length of arr) {
        minHeap.push(length);
    }

    while (minHeap.size() > 1) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        const cost = first + second;
        totalCost += cost;
        minHeap.push(cost);
    }

    return totalCost;
}
  
console.log(mincost([4, 3, 2, 6])); 
console.log(mincost([1, 2, 3, 4, 5])); 

module.exports=mincost;
