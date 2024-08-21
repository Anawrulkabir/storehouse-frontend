/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PiSpinnerGapLight } from 'react-icons/pi'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'

// eslint-disable-next-line no-unused-vars
const SignUp = ({ setDefaultValue }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { toast } = useToast()
  const {
    createUser,
    signInWithGoogle,
    // updateUserProfile,
    loading,
    setLoading,
  } = useAuth()

  const [spinLoading, setSpinLoading] = useState(false)
  const from = location?.state || '/home'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const firstName = form.firstname.value
    const lastName = form.lastname.value
    // const name = firstName + lastName
    const email = form.email.value
    const password = form.password.value
    // const image = form.image.files[0]

    try {
      setLoading(true)
      // 1. Upload image and get image url

      // console.log(image_url)
      //2. User Registration
      const result = await createUser(email, password)
      // console.log(result)

      // 3. Save username and photo in firebase
      // await updateUserProfile(name, image_url)
      navigate('/')
    } catch (err) {
      setLoading(false)
      console.log(err)
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      setSpinLoading(true)

      setTimeout(async () => {
        await signInWithGoogle()
        setSpinLoading(false)
        navigate(from)
        toast.success('Signup Successful')

        toast({
          description: 'Successfully signed in to your account.',
        })
      }, 2000)
    } catch (err) {
      setSpinLoading(false)
      // console.log(err)
      toast.error(err.message)
    }
  }
  return (
    <>
      {/* <div className="flex items-center justify-center h-screen "> */}
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    required
                    name="firstname"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    required
                    name="lastname"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  name="email"
                />
              </div>
              {/* photo input */}

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <PiSpinnerGapLight className="animate-spin m-auto" />
                ) : (
                  'Create an account'
                )}
              </Button>
            </form>
            <Button
              variant="outline"
              className="w-full"
              disabled={loading}
              onClick={handleGoogleSignIn}
            >
              {spinLoading ? (
                <PiSpinnerGapLight className="animate-spin m-auto" />
              ) : (
                'Signup with Google'
              )}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <button
              // TODO
              // onClick={() => {
              //   setDefaultValue('null')
              //   // console.log('hello')
              // }}
              className="underline"
            >
              Sign in
            </button>
          </div>
        </CardContent>
      </Card>
      {/* </div> */}
    </>
  )
}

export default SignUp
