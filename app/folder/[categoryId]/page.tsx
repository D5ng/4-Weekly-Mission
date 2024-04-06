import Card from "@/components/card/card"
import { filteredLinks } from "@/services/business-sevice"
import { Suspense } from "react"
import { PageProps } from "@/features/folder/types/folder-type"
import CardSkelton from "@/features/folder/components/skelton/card-skelton"

async function CardList(props: { query: string; categoryId: string }) {
  const links = await filteredLinks(props.query, props.categoryId)
  await new Promise((resolve) => setTimeout(() => resolve(1), 1000))
  return <Card links={links} />
}


export default function FolderCategoryPage(props: any) {
  const query = props.searchParams.query
  const categoryId = props.params.categoryId

  return (
    <Suspense fallback={<CardSkelton />}>
      <CardList categoryId={categoryId} query={query} />
    </Suspense>
  )
}
