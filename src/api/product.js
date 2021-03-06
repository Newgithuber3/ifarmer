import request from "@/utils/request";

export function getProductList(data) {
  return request({
    url: "/product/productList",
    method: "post",
    data
  });
}

export function getProduct(params) {
  return request({
    url: "/product/queryProduct",
    method: "get",
    params
  });
}
