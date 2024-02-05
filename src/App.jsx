import React, { useEffect } from "react"
import Header from "./components/header/Header"
import useHttp from "./hooks/useHttp"
import Visual from "./components/visual/Visual"
import SearchBar from "./components/UI/SearchBar"
import FolderCardList from "./components/folder/FolderCardList"
import Section from "./components/shared/Section"

function App() {
  const { state: profileData, fetchRequest: profilRequest } = useHttp()
  const { state: folderData, fetchRequest: folderRequest } = useHttp()

  useEffect(() => {
    profilRequest("https://bootcamp-api.codeit.kr/api/sample/user")
  }, [profilRequest])

  useEffect(() => {
    folderRequest(`https://bootcamp-api.codeit.kr/api/sample/folder`)
  }, [folderRequest])

  return (
    <React.Fragment>
      <Header profileData={profileData} />
      <main>
        <Section className="visual">
          <Visual />
        </Section>

        <Section className="link">
          {folderData.isLoading && <h3 className="">로딩 중...</h3>}
          <SearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
          {folderData.data && <FolderCardList folderData={folderData.data} />}
        </Section>
      </main>
    </React.Fragment>
  )
}

export default App
