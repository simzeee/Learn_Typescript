function safeSqrt(n: number) {
    return n < 0 || isNaN(n) ? { kind: 'failure' } : { kind: 'success', value: Math.sqrt(n) }
}