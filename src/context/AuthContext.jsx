import { createContext, useEffect } from "react"
import useHttp from "../hooks/useHttp"

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
  const { state: profileData, fetchRequest: profilRequest } = useHttp()

  useEffect(() => {
    profilRequest("https://bootcamp-api.codeit.kr/api/sample/user")
  }, [profilRequest])

  return <AuthContext.Provider value={profileData}>{children}</AuthContext.Provider>
}
