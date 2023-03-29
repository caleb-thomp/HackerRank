function sumXor(n: number): number {
    if (n === 0) {
        return 1;
    }
    const s: string = n.toString(2);
    const r: number = s.split('0').length - 1;
    return Math.pow(2, r);
}
