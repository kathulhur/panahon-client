import { Providers } from "./providers";


export const revalidate = 300
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <Providers>
            {children}
          </Providers>
          </body>
      </html>
    );
  }