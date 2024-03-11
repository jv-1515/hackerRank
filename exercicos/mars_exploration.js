
function marsExploration(s) {
    let alteredNum = 0;
    
    for (let i = 0; i < s.length; i += 3){
        if (s[i] !== 'S') {
            alteredNum++;
        }
        
        if (s[i + 1] !== 'O') {
            alteredNum++;
        }
        
        if (s[i + 2] !== 'S') {
            alteredNum++;
        }
    }
    
    return alteredNum;

}