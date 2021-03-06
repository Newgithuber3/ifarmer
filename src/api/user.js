import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}

export function getUserAddress() {
  return request({
    url: "/common/getUserAddress",
    method: "get"
  });
}