import request from "@/utils/request";

export function getCartList(params) {
  return request({
    url: "/cart/cartList",
    method: "get",
    params
  });
}

export function getCartListByIds(data) {
  return request({
    url: "/cart/carts",
    method: "post",
    data
  });
}

export function deleteCart(params) {
  return request({
    url: "/cart/delete",
    method: "get",
    params
  });
}

export function updateNum(params) {
  return request({
    url: "/cart/updateNum",
    method: "get",
    params
  });
}

export function addCart(params) {
  return request({
    url: "/cart/addCart",
    method: "get",
    params
  });
}