function sumXor(n: number): number {
    let count = 0;
    while (n > 0) {
        if ((n & 1) === 0) {
            count++;
        }
        n >>= 1;
    }
    return 2 ** count;
}
