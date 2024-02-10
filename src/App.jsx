import { FolderBody, FolderHeader } from "./components/folder"
import ProfileContextProvider from "./context/ProfileContext"
import FolderContextProvider from "./context/FolderContext"
import Footer from "./components/common/footer/Footer"
import Header from "./components/common/header/Header"

function App() {
  return (
    <ProfileContextProvider>
      <FolderContextProvider>
        <Header />
        <main>
          <FolderHeader />
          <FolderBody />
        </main>
        <Footer />
      </FolderContextProvider>
    </ProfileContextProvider>
  )
}

export default App
