// "use client";

// import { ThemeProvider as NextThemesProvider } from "next-themes";

// export default function ThemeProvider({ children }) {
//   return (
//     <NextThemesProvider attribute="class" defaultTheme="light">
//       {children}
//     </NextThemesProvider>
//   );
// }

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      {children}
    </NextThemesProvider>
  );
}

