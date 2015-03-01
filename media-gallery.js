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

export default {
  load,
  save,
  clear,
  get count() {
    return hashtable.size;
  }
};
