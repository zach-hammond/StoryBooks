import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
      <div>
        <LoginButton />
        {/* <RegisterButton /> */}
        <LogoutButton />
        {/* <ProfileButton /> */}
      </div>

     

    </main>
  )
}
