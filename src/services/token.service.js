import LocalStorageService from "./localStorage.service";
// import jwt_decode from "jwt-decode";

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
  getDecoded() {
    const _tokenName = LocalStorageService.getItem("token");
    // return jwt_decode(_tokenName);
    return "";
  },
  exist() {
    return LocalStorageService.existItem("token");
  },
};

export default TokenService;
