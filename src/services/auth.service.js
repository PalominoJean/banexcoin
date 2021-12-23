import TokenService from "./token.service";

export function LogoutService() {
  return TokenService.clear();
}

export function PopulateService(token) {
  TokenService.save(token);
}
