export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{"html, body { margin: 0; height: 100%; }"}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
