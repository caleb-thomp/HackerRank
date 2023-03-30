class Heap {
  arr: number[]
  constructor() {
    this.arr = []
  }
  swap(a: number, b: number) {
    const temp = this.arr[a]
    this.arr[a] = this.arr[b]
    this.arr[b] = temp
  }

  heapifyUp(idx: number) {
    if (idx <= 0) return
    const parentIdx = this.getParent(idx)
    const parentValue = this.arr[parentIdx]
    if (parentValue > this.arr[idx]) {
      this.swap(idx, parentIdx)
      this.heapifyUp(parentIdx)
    }
  }

  heapifyDown(idx: number) {
    const leftNodeIdx = this.getLeftChild(idx)
    const rightNodeIdx = this.getRightChild(idx)
    if (idx >= this.arr.length || leftNodeIdx >= this.arr.length) return
    const leftNode = this.arr[leftNodeIdx]
    const rightNode = this.arr[rightNodeIdx]
    const value = this.arr[idx]
    if (rightNode < leftNode && value > rightNode) {
      this.swap(rightNodeIdx, idx)
      this.heapifyDown(rightNodeIdx)
    } else if (value > leftNode) {
      this.swap(leftNodeIdx, idx)
      this.heapifyDown(leftNodeIdx)
    }
  }

  insert(value: number) {
    this.arr.push(value)
    this.heapifyUp(this.arr.length - 1)
  }

  remove(): number | undefined {
    if (this.arr.length <= 1) return this.arr.pop()
    const value = this.arr[0]
    this.arr[0] = this.arr[this.arr.length - 1]
    this.arr.pop()
    this.heapifyDown(0)
    return value
  }

  peek(): number | undefined {
    return this.arr[0]
  }

  getLeftChild(idx: number): number {
    return idx * 2 + 1
  }

  getParent(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  getRightChild(idx: number): number {
    return idx * 2 + 2
  }
}

function cookies(k: number, A: number[]): number {
  if (A.length === 1) {
    return A[0] >= k ? 0 : -1
  }
  const heap = new Heap()

  A.forEach(value => heap.insert(value))
  let iterations = 0
  while (heap.peek() < k && heap.arr.length !== 1) {
    const first = heap.remove()
    const second = heap.remove()
    const newValue = first + 2 * second
    heap.insert(newValue)
    iterations++
  }

  return heap.peek() >= k ? iterations : -1
}