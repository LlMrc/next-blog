

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mashpa media ',
  description: 'social media project create by louis Marc Leonard',
}





export default function RootLayout({ children,}: {children: React.ReactNode}) {
  return (
   
    <html lang="en">
 <body className={inter.className} style={{margin:0}}>
   
  
    { children}

    
        </body>
    </html>
 
  )
}
