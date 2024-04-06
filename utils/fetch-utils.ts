import ApiError from "./error-utils"

export interface ErrorType {
  error: boolean
  errorMessage: string
}

export const fetchData = async <T>(api: string): Promise<T | Error> => {
  try {
    const response = await fetch(api)

    if (!response.ok) {
      throw new ApiError("알 수 없는 오류로 요청에 실패했습니다.", response.status)
    }

    const responseData = await response.json()
    return responseData.data
  } catch (error) {
    if (error instanceof ApiError) return error
    return new ApiError("알 수 없는 오류로 요청에 실패했습니다.", 500)
  }
}
