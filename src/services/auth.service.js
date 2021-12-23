// import ApiBaseService from "./apiBase.service";
import TokenService from "./token.service";

// export function LoginService(body) {
//   return ApiBaseService.post("login", body).then((response) => response);
// }

export function LogoutService() {
  return TokenService.clear();
}

export function PopulateService(token) {
  TokenService.save(token);
  // this.PopulateApiBaseHeaders()
}

// export function PopulateApiBaseHeaders() {
//   ApiBaseService.defaults.headers.common["token"] = `${TokenService.get()}`;
// }
