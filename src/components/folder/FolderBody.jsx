import React, { useContext } from "react"
import Wrapper from "../layout/Wrapper"
import { FolderSearchBar, FolderCardList } from "./"
import Loading from "../UI/Loading"
import { FolderContext } from "../../context/FolderContext"

function FolderBody() {
  const { isLoading, data } = useContext(FolderContext)
  return (
    <section>
      <Wrapper>
        {isLoading && <Loading>로딩 중...</Loading>}
        <FolderSearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
        {data && <FolderCardList data={data} />}
      </Wrapper>
    </section>
  )
}

export default FolderBody
