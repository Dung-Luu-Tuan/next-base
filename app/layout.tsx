import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import MainTemplate from "./components/organisms/MainTemplate";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";

export default function RootLayout(props: {
  children:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <MainTemplate>{props.children}</MainTemplate>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
