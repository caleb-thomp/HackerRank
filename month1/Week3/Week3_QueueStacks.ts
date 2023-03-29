interface StackNode<T> {
  value: T
  prev?: StackNode<T>
}

class Stack<T> {
  head?: StackNode<T>
  length: number

  constructor() {
    this.length = 0
    this.head = undefined
  }

  push(value: T): void {
    const newNode: StackNode<T> = {
      value,
      prev: this.head
    }
    this.head = newNode
    this.length++
  }

  pop(): T | undefined {
    if (this.length <= 0) return undefined
    const curr = this.head
    this.head = curr.prev
    this.length--
    return curr.value
  }

  peek(): T | undefined {
    return !this.head ? undefined : this.head.value
  }
}

class Queue<T> {
  mainStack: Stack<T>
  helperStack: Stack<T>
  length: number

  constructor() {
    this.length = 0
    this.mainStack = new Stack()
    this.helperStack = new Stack()
  }

  enqueue(value: T) {
    this.helperStack.push(value)
    this.length++
  }

  dequeue(): T | undefined {
    this.length--
    if (!this.mainStack.length) {
      let temp = this.helperStack.pop()
      while (temp) {
        this.mainStack.push(temp)
        temp = this.helperStack.pop()
      }
    }
    return this.mainStack.pop()
  }

  peek(): T | undefined {
    if (!this.mainStack.length) {
      let temp = this.helperStack.pop()
      while (temp) {
        this.mainStack.push(temp)
        temp = this.helperStack.pop()
      }
    }
    return this.mainStack.peek()
  }
}

interface Command {
  value: number | undefined
  commandId: number
}

function processCommands(commands: Command[]): number[] {
  const result: number[] = []
  const queue = new Queue<number>()
  for (let i = 0; i < commands.length; i++) {
    const commandObj = commands[i]
    if (commandObj.commandId === 1) {
      queue.enqueue(commandObj.value)
    } else if (commandObj.commandId === 2) {
      queue.dequeue()
    } else {
      result.push(queue.peek())
    }
  }
  return result
}

function main() {
  const q = Number(readLine())
  const commands: Command[] = []
  for (let i = 0; i < q; i++) {
    const line = readLine().split(" ")
    commands.push({
      commandId: Number(line[0]),
      value: line.length === 1 ? undefined : Number(line[1])
    })
  }
  const result = processCommands(commands)
  result.forEach(value => {
    console.log(value)
  })
}