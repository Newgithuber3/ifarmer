import request from 'utils/request'

export function getTableData(){
  return request({
    url: "/static/data.json",
    method: "post",
    data: {}
  })
}
