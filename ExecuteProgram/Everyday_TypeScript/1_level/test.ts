function elemAt<T>(arr: T[], index: number): { kind: 'failure', reason: string } | { kind: 'success', value: T } {

    // if arr is empty return failure obj
    if (arr.length === 0) {
        return { kind: 'failure', reason: 'array is empty' }
    }
    else if (index >= arr.length || index < 0) {
        return { kind: 'failure', reason: 'no element at that index' }
    }
    else {
        return { kind: 'success', value: arr[index] }
    }


}