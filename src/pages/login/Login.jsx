/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
// import toast from 'react-hot-toast'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { PiSpinnerGapLight } from 'react-icons/pi'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

// eslint-disable-next-line no-unused-vars
const Login = ({ setDefaultValue }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { toast } = useToast()

  const from = location?.state || '/home'
  const { signInWithGoogle, signIn, loading, setLoading, resetPassword } =
    useAuth()
  const [email, setEmail] = useState('')
  const [spinLoading, setSpinLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    try {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
      // 1. sign in user
      await signIn(email, password)
      navigate(from)

      toast({
        description: 'Successfully signed in to your account.',
      })
    } catch (err) {
      console.log(err)

      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: err.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      setLoading(false)
    }
  }

  const handleResetPassword = async () => {
    if (!email) return toast.error('Please write your email first!')
    try {
      await resetPassword(email)
      toast({
        description: 'Request Success! Check your email for further process...',
      })
      setLoading(false)
    } catch (err) {
      console.log(err)
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: err.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })

      setLoading(false)
    }
    console.log(email)
  }

  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      setSpinLoading(true)

      setTimeout(async () => {
        await signInWithGoogle()
        setSpinLoading(false)
        navigate(from)

        toast({
          description: 'Signup Successful',
        })
      }, 2000)
    } catch (err) {
      setSpinLoading(false)
      console.log(err)
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: err.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  return (
    <>
      {/* <div className="flex items-center justify-center h-screen "> */}
      <Card className="mx-auto max-w-sm ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form onSubmit={handleSubmit} className="grid space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <button
                    onClick={handleResetPassword}
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </button>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <PiSpinnerGapLight className="animate-spin m-auto" />
                ) : (
                  'Login'
                )}
              </Button>
            </form>

            <Button
              onClick={handleGoogleSignIn}
              variant="outline"
              className="w-full"
              disabled={spinLoading}
            >
              {spinLoading ? (
                <PiSpinnerGapLight className="animate-spin m-auto" />
              ) : (
                'Login with Google'
              )}
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <button
              className="underline"
              // TODO
              // onClick={() => setDefaultValue('signup')}
            >
              Sign up
            </button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default Login
