import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default";
import { GLobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GLobalStyle />
      
      <h1>Hello World, DT Money here!</h1>
    </ThemeProvider>
  );
}