import Wrapper from "@/components/layout/wrapper"
import SearchBar from "@/components/searchBar/searchBar"
import FlexLayout from "./flex-layout"
import { fetchCategories } from "../../../../services/business-sevice"
import FolderCategory from "../category/folder-category"
import { Suspense } from "react"
import Loading from "@/components/ui/loading"
import FolderAddButton from "../folder-add-button/folder-add-button"
import FolderTitle from "./folder-title"
import FolderControls from "../folder-control/folder-controls"

interface FolderFeaturesProps {
  children: React.ReactNode
}

async function Category() {
  const categories = await fetchCategories()
  return <FolderCategory categories={categories} />
}

export default async function FolderFeatures(props: FolderFeaturesProps) {
  const categories = await fetchCategories()

  return (
    <section>
      <Wrapper>
        <Suspense fallback={<Loading />}>
          <SearchBar type="text" placeholder="링크를 검색해 보세요." name="search" />
        </Suspense>
        <FlexLayout>
          <Suspense fallback={<Loading />}>
            <Category />
          </Suspense>
          <FolderAddButton />
        </FlexLayout>
        <FlexLayout>
          <FolderTitle categories={categories} />
          <FolderControls categories={categories} />
        </FlexLayout>
        {props.children}
      </Wrapper>
    </section>
  )
}
