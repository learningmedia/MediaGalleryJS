const hashtable = new Map();

function load(name) {
  return hashtable.get(name);
}

function save(name, arrayBuffer) {
  hashtable.set(name, arrayBuffer);
}

function clear() {
  hashtable.clear();
}

function count() {
  return hashtable.size;
}

export default {
  load,
  save,
  clear,
  count
};
