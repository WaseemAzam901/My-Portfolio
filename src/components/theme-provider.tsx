// "use client";

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";
 
// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   const [mounted, setMounted] = React.useState(false);

//   // Wait until the theme is mounted (i.e., fully loaded on the client)
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     // Don't render anything until the theme is loaded
//     return null;
//   }

//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }





"use client"
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
 
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}