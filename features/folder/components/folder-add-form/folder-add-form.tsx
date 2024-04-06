import Image from "next/image"
import Button from "@/components/ui/button"
import classes from "./folder-add-form.module.css"
import folderShareIcon from "@/public/folder/folder-share.svg"

export default function FolderAddForm() {
  return (
    <section className={classes["section-form"]}>
      <form className={classes.form}>
        <div className={classes.inputLayout}>
          <Image src={folderShareIcon} alt="링크 아이콘" width={20} height={20} />
          <input type="text" placeholder="링크를 추가해 보세요" name="add-link" />
        </div>
        <Button size="small" type="submit">
          추가하기
        </Button>
      </form>
    </section>
  )
}
