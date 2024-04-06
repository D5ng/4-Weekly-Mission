import Card from "@/components/card/card"
import CardSkelton from "@/features/folder/components/skelton/card-skelton"
import { filteredLinks } from "@/services/business-sevice"
import { SearchParams } from "@/features/folder/types/folder-type"
import { Suspense } from "react"

async function CardList(props: { query: string }) {
  const query = props.query || ""
  const links = await filteredLinks(query)
  await new Promise((resolve) => setTimeout(() => resolve(1), 1000))

  return <Card links={links} />
}

export default async function FolderPage(props: SearchParams<"query">) {
  const query = props.searchParams.query

  return (
    <Suspense fallback={<CardSkelton />}>
      <CardList query={query} />
    </Suspense>
  )
}
