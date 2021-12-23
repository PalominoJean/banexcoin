import LocalStorageService from "./localStorage.service";

const TokenService = {
  get() {
    const _tokenName = LocalStorageService.getItem("token");
    return _tokenName;
  },
  getWithoutBearer() {
    const _tokenName = LocalStorageService.getItem("token");
    return _tokenName.split(" ")[1];
  },
  save(token) {
    LocalStorageService.createItem("token", token);
  },
  clear() {
    LocalStorageService.clearItem("token");
  },
  exist() {
    return LocalStorageService.existItem("token");
  },
};

export default TokenService;
