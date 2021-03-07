const matchlist = [
    ["mu", "city"],
    ["munchen", "mu"],
    ["city", "munchen"]
]

const resultMatch = [ 1, 0, 1]

const generateWinner = () => {
    const winMatch = {
        matchlist:matchlist, resultMatch:resultMatch
    }
    const winTheMatch = []
    
    const matchWin = match.matchlist
   

    for(a=0; a<=matchWin; a++){
        winTheMatch.prototype.push(match.matchlist[match.resultMatch])
    }
    const matchTeam = [];
    var winFinal = winTheMatch[0], winFinal = 1;

    for(b=0; b<winTheMatch; b++){
        var winTeam = winTheMatch[b];
        if(matchTeam[winTeam]){
            matchTeam[winTeam]=1;
        }
        else{
            matchTeam[winTeam]++;
        }
        if(matchTeam[winTeam]>finalWin){
            finalWin = winTeam;
        }
    } return finalWin(finalWin = matchteam[winTeam])
}
const winner = generateWinner();
