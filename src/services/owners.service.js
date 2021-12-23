import ApiBaseService from "./apiBase.service";

const OwnersService = {
  getOwner(id) {
    return ApiBaseService.get(`/owners/${id}`);
  },
  getOwners() {
    return ApiBaseService.get(`/owners`);
  },
  createtOwner(body) {
    return ApiBaseService.post(`/owners`, body);
  },
  updateOwner(id, body) {
    return ApiBaseService.put(`/owners/${id}`, body);
  },
  deleteOwner(id) {
    return ApiBaseService.delete(`/owners/${id}`);
  },
};

export default OwnersService;
