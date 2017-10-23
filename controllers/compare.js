// string comparison function
function compare(targetPhrase, userPhrase) {

    targetTokens = tokenize(targetPhrase);
    userTokens = tokenize(userPhrase);

    // total number of non-white characters in target phrase 
    const numTargetCharacters = targetPhrase.length - targetTokens.length + 1;

    let charactersMatched = 0;
    let tokensMatched = 0;
    
    for(let i = 0; i < targetTokens.length; i++) {

        if(targetTokens[i] === userTokens[i]) {
         
            tokensMatched++;
            charactersMatched += targetTokens[i].length;
        }
    }

    let match = {   numTargetTokens: targetTokens.length,
                    numMatchedTokens: tokensMatched,
                    numCharactersMatched: charactersMatched,
                    numTotalCharacters: numTargetCharacters,
                    percentage: charactersMatched / numTargetCharacters
    }
    // return an object with match info
    return (match);
}

// helper function to break up phrase into tokens (words)
// receives a string and returns an array of tokens.
function tokenize(phrase) {

    const tokenArray = [];
    let currToken = "";

    for (let i = 0; i < phrase.length; i++) {
        if(phrase[i] !== " ") {
            currToken += phrase[i];
        } else {
            tokenArray.push(currToken);
            currToken = "";
        }
    }

    tokenArray.push(currToken);
    return tokenArray;
}

module.exports = { compare: compare };