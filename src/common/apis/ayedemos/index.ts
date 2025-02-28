import type * as Tables from "./type"
import { request } from "@/http/axios"

/** 增 */
export function createTableDataApi(data: Tables.CreateOrUpdateTableRequestData) {
  return request({
    url: "tables",
    method: "post",
    data
  })
}

/** 删 */
export function deleteTableDataApi(id: number) {
  return request({
    url: `tables/${id}`,
    method: "delete"
  })
}

/** 改 */
export function updateTableDataApi(data: Tables.CreateOrUpdateTableRequestData) {
  return request({
    url: "tables",
    method: "put",
    data
  })
}

/** 查 */
export function getTableDataApi(params: Tables.TableRequestData) {
  return request<Tables.TableResponseData>({
    url: "tables",
    method: "get",
    params
  })
}

/** 测试Aye后端接口 */
export function testAyeApi() {
  return request({
    url: "book/aye-hello",
    method: "get"
  })
}
