function migratoryBirds(arr) {
    const birdNum = {};
        
    for (let i = 0; i < arr.length; i++) {
        const birdType = arr[i];
        if (birdNum[birdType]) {
            birdNum[birdType]++;
        } else {
            birdNum[birdType] = 1;
        }
        
    }

    let maxNum = 0;
    let higherNum = 0;

    for (const birdType in birdNum) {
        if (birdNum[birdType] > maxNum) {
            maxNum = birdNum[birdType];
            higherNum = birdType;
        } else if (birdNum[birdType] == maxNum && birdType < higherNum) {
            higherNum = birdType;
        }
        
    }
        return higherNum;   
}