import Header from "./components/header/Header"
import { FolderBody, FolderHeader } from "./components/folder"
import AuthContextProvider from "./context/AuthContext"
import FolderContextProvider from "./context/FolderContext"

function App() {
  return (
    <AuthContextProvider>
      <FolderContextProvider>
        <Header />
        <main>
          <FolderHeader />
          <FolderBody />
        </main>
      </FolderContextProvider>
    </AuthContextProvider>
  )
}

export default App
