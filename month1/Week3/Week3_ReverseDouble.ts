function reverse(llist: { prev: any; next: any; }): any {
  const { next } = llist;
  llist.next = llist.prev;
  llist.prev = next;
  if (!llist.prev) {
    return llist;
  }
  return reverse(next);
}
