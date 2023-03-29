
function insertNodeAtPosition(llist: SinglyLinkedListNode, data: number, position: number): SinglyLinkedListNode {
  const node = new SinglyLinkedListNode(data);
  let counter = 0;
  let previous: SinglyLinkedListNode | null = null;
  let current: SinglyLinkedListNode | null = llist;

  while (counter < position) {
    previous = current;
    current = current?.next || null;
    counter++;
  }

  if (previous) {
    previous.next = node;
  } else {
    llist = node;
  }

  node.next = current;
  return llist;
}
