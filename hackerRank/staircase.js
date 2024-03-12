function staircase(n) {
    for(let i = 1; i <= n; i++){
        let space = '';
        let hashtag = '';
        
        for (let j = 1; j <= n -i; j++) {
            space += ' ';
        }
        
        for (let k = 1; k <= i; k++) {
            hashtag += '#';
        }
        
        console.log(space + hashtag);
    
    }
}
