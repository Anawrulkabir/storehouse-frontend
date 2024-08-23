import { Link } from 'react-router-dom'
import { Menu, Package2, Search, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import useAuth from '../hooks/useAuth'

const Navbar = () => {
  const { logOut, user } = useAuth()
  // console.log(user)
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10 justify-between">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          to="/"
          className="text-foreground transition-colors hover:text-foreground font-semibold text-lg"
        >
          Storehouse
        </Link>
        <Link
          to="/all"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          All&nbsp;Products
        </Link>
        <Link
          to="/apparel-accessories"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Apparel&nbsp;&&nbsp;Accessories
        </Link>

        <Link
          to="/lifestyle-gadgets"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Lifestyle&nbsp;&&nbsp;Gadgets
        </Link>
      </nav>
      <nav className="md:hidden font-bold text-lg px-3">
        <p>Storehouse</p>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Storehouse</span>
            </Link>
            <Link to="/" className="hover:text-foreground">
              Storehouse
            </Link>
            <Link
              to="/all"
              className="text-muted-foreground hover:text-foreground"
            >
              All
            </Link>
            <Link
              to="/apparel-accessories"
              className="text-muted-foreground hover:text-foreground"
            >
              Apparel&nbsp;&&nbsp;Accessories
            </Link>
            <Link
              to="/lifestyle-gadgets"
              className="text-muted-foreground hover:text-foreground"
            >
              Lifestyle&nbsp;&&nbsp;Gadgets
            </Link>

            {!user ? (
              <>
                <Link to="/signup">
                  <button className="border-2 text-black w-full px-5 py-2 text-sm tracking-wide  capitalize transition-colors duration-300 transform  rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Sign Up
                  </button>
                </Link>

                <Link to="/login">
                  <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={logOut}
                  className="border-2  bg-red-600 text-white w-full px-5 py-2 text-sm tracking-wide  capitalize transition-colors duration-300 transform  rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex items-center justify-center">
        {user ? (
          <>
            <button
              onClick={logOut}
              className="border-2 text-white bg-red-700 w-full px-5 py-2 text-sm tracking-wide  capitalize transition-colors duration-300 transform  rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button className="border-2 text-black w-full px-5 py-2 text-sm tracking-wide  capitalize transition-colors duration-300 transform  rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Sign Up
              </button>
            </Link>

            <Link to="/login">
              <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
      {/* <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4  justify-between ">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-md border"
            >
              <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Join
              </button>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem></DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Join</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
    </header>
  )
}

export default Navbar
