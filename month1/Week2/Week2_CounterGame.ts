function counterGame(n : number): string {
    // Write your code here
    const binaryN = n.toString(2);
    const noOfZerosToTheRight = binaryN.split('1').pop().length;
    const noOfOnes = binaryN.match(/1/g).length;
    console.log(noOfZerosToTheRight, noOfOnes);
    if(!((noOfZerosToTheRight + noOfOnes) % 2)){
        return 'Louise';
    }
    return 'Richard';
}