const SYSTEM_KEY = "banexcoin";

const LocalStorageService = {
  get() {
    const _system = JSON.parse(localStorage.getItem(SYSTEM_KEY));
    return _system;
  },

  getItem(itemName) {
    const _system = JSON.parse(localStorage.getItem(SYSTEM_KEY));
    return _system[itemName];
  },

  createItem(itemName, itemValue) {
    const _system = this.get();
    const _systemUpdated = { ..._system, [itemName]: itemValue };
    localStorage.setItem(SYSTEM_KEY, JSON.stringify(_systemUpdated));
  },

  clearItem(itemName) {
    const _system = this.get();
    delete _system[itemName];
    localStorage.setItem(SYSTEM_KEY, JSON.stringify(_system));
  },

  exist() {
    return !!localStorage.getItem(SYSTEM_KEY);
  },

  existItem(itemName) {
    return this.exist() ? !!this.getItem(itemName) : false;
  },
};

export default LocalStorageService;
