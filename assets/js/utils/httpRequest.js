import HttpError from "./httpError.js"

export const requestHTTP = async (url, options) => {
  try {
    const response = await fetch(url, {
      method: options?.method || "GET",
      body: options?.body || null,
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 409) throw new HttpError("이미 존재하는 이메일입니다.", response.status)
    if (!response.ok) throw new HttpError("이메일 검사중 오류가 발생했습니다.", response.status)

    const responseData = await response.json()

    return {
      result: responseData.data.isUsableNickname,
    }
  } catch (error) {
    return {
      result: false,
      status: error.statusCode,
      message: error.message,
    }
  }
}
