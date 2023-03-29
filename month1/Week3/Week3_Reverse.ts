class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | null;

  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
  }
};

function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
  let previous_node: any = null;
  let current_node: any = llist;

  while (current_node) {
    let next_node = current_node.next;

    current_node.next = previous_node;

    previous_node = current_node;
    current_node = next_node;
  }
  llist = previous_node;
  return llist;
}