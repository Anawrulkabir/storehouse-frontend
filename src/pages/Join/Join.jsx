import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Login from '../Login/Login'

import { useState } from 'react'

import SignUp from '../signup/Signup'
import BackButton from '../../components/Shared/Botton/BackButton'

export function Join() {
  const [defaultValue, setDefaultValue] = useState('login')
  return (
    <div className="flex  justify-center mt-20 relative h-screen">
      {/* TODO :make slight toogle transition using framer motion */}
      <Tabs defaultValue={defaultValue} className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <SignUp setDefaultValue={setDefaultValue} />
        </TabsContent>
        <TabsContent value="login">
          <Login setDefaultValue={setDefaultValue} />
        </TabsContent>
      </Tabs>
      <BackButton />
    </div>
  )
}
