import { createContext, useEffect } from "react"
import useHttp from "../hooks/useHttp"

export const FolderContext = createContext(null)

export default function FolderContextProvider({ children }) {
  const { state: folderData, fetchRequest: folderRequest } = useHttp()

  useEffect(() => {
    folderRequest(`https://bootcamp-api.codeit.kr/api/sample/folder`)
  }, [folderRequest])

  return <FolderContext.Provider value={folderData}>{children}</FolderContext.Provider>
}
