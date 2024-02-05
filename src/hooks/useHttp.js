import React, { useCallback, useReducer, useState } from "react"
import HttpError from "../utils/httpError"

const reducer = (state, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        isLoading: true,
      }

    case "FULFILED":
      return {
        ...state,
        data: action.data,
        isLoading: false,
      }

    case "ERROR":
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }

    default:
  }
}

function useHttp() {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    isLoaing: false,
    hasError: false,
  })

  // const [data, setData] = useState(null)

  const fetchRequest = useCallback(async (api) => {
    dispatch({ type: "PENDING" })

    try {
      const response = await fetch(api)

      if (!response.ok) throw new HttpError("알 수 없는 요청에 실패했습니다.", 500)

      const responseData = await response.json()

      dispatch({ type: "FULFILED", data: responseData })
    } catch (error) {
      dispatch({ type: "ERROR" })
      return {
        messgae: error.message,
        code: error.statusCode,
      }
    }
  }, [])

  return {
    state,
    fetchRequest,
  }
}

export default useHttp
