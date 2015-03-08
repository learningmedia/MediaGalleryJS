const hashtable = new Map();

function load(name) {
  return new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(hashtable.get(name));
    }, 0);
  });
}

function save(name, arrayBuffer) {
  return new Promise((resolve) => {
    window.setTimeout(function () {
      hashtable.set(name, arrayBuffer);
      resolve();
    }, 0);
  });
}

function clear() {
  return new Promise((resolve) => {
    window.setTimeout(function () {
      hashtable.clear();
      resolve();
    }, 0);
  });
}

function count() {
  return new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(hashtable.size);
    }, 0);
  });
}

export default {
  load,
  save,
  clear,
  count
};
