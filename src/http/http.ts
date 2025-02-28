import { request } from "@/http/axios"

// 暂时没有用到

// 封装 GET 请求
export function get<T>(url: string, params?: Record<string, any>) {
  return request<T>({
    method: "GET",
    url,
    params
  })
}

// 封装 POST 请求
export function post<T>(url: string, data?: Record<string, any>) {
  return request<T>({
    method: "POST",
    url,
    data
  })
}

// 封装 PUT 请求
export function put<T>(url: string, data?: Record<string, any>) {
  return request<T>({
    method: "PUT",
    url,
    data
  })
}

// 封装 DELETE 请求
export function del<T>(url: string, params?: Record<string, any>) {
  return request<T>({
    method: "DELETE",
    url,
    params
  })
}
