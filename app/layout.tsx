import { Inter } from 'next/font/google'
import AuthContext from "@/components/AuthContext";

export const metadata = {
  title: 'StoryBooks',
  description: 'Your friendly company bookie!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthContext>
        <body>{children}</body>
      </AuthContext>
    </html>
  )
}
