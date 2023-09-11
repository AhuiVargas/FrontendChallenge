function StringChallenge(str) {
  let encodedStr = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      encodedStr += count + str[i];
      count = 1;
    }
  }

  const ChallengeToken = 'hz3014tf79c';
  let finalOutput = '';
  let tokenIndex = 0;

  for (let i = 0; i < encodedStr.length; i++) {
    finalOutput += encodedStr[i];
    if (tokenIndex < ChallengeToken.length) {
      finalOutput += ChallengeToken[tokenIndex];
      tokenIndex++;
    }
  }

  while (tokenIndex < ChallengeToken.length) {
    finalOutput += ChallengeToken[tokenIndex];
    tokenIndex++;
  }

  return finalOutput;
}

console.log(StringChallenge("aabbcde")); // Output: "2haz23b011c41tdf17e9c"
console.log(StringChallenge("wwwbbbw")); // Output: "3hwz33b011w4tf79c"
