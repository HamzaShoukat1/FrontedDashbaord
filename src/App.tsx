import { Outlet } from "react-router-dom"
import { ColorsModeContext,useMode } from "./context/themeContext.tsx"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@emotion/react"

export default function App() {
const [theme,colorMode] =  useMode()
  return (
    <>
    <ColorsModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="w-full h-full">
        <Outlet />
      </main>
    </ThemeProvider>
    </ColorsModeContext.Provider>

      
    </>
  )
}
