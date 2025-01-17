import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../../ui/sheet"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Menu } from 'lucide-react'
import * as React from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../logo/Logo"
import PrimaryButton from "../primaryButton"
import SecondaryButton from "../secondaryButton"
import { NavPropsTypes } from "../../../types/types"
import { Button } from "../../ui/button"
import { Link } from "react-router-dom"

export function Navbar({ navitems }: { navitems: NavPropsTypes[] }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const navigate = useNavigate()
    return (
        <header className="my-4 mx-2 lg:mx-0">
            <div className="container flex justify-between items-center border md:px-14 px-4  py-3 md:py-3 border-bg_secondary rounded-lg">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="px-2 lg:hidden">
                            <Menu className="min-h-6 min-w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <DialogTitle />
                    <SheetContent side="left" className="bg-bg_secondary text-white ">
                        <Link to="/" className=" flex items-center space-x-2">
                            <Logo />
                        </Link>
                        <nav className="flex flex-col gap-6 mt-10">
                            {
                                navitems?.map((data: NavPropsTypes, idx: number) => <Link
                                    key={idx}
                                    to={data.link}
                                    onClick={() => setIsOpen(false)}
                                    className=" font-medium hover:text-primary_highlighted transition-all duration-300"
                                >
                                    {data.name}
                                </Link>)
                            }
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="lg:flex hidden items-center  flex-1">
                    <Link to="/" className="mr-6 flex items-center space-x-2">
                        <Logo />
                    </Link>
                    <nav className="flex text-lg flex-1 items-center justify-center gap-10">
                        {
                            navitems?.map((data: NavPropsTypes, idx: number) => <Link
                                key={idx}
                                to={data.link}
                                onClick={() => setIsOpen(false)}
                                className=" font-medium hover:text-primary_highlighted transition-all duration-300"
                            >
                                {data.name}
                            </Link>)
                        }
                    </nav>
                </div>
                <div className="flex items-center justify-end space-x-4">
                    <PrimaryButton parent="rounded-md lg:block hidden" child="rounded-md px-10">
                        <button onClick={() => navigate("/signIn")} className="">Sign In</button>
                    </PrimaryButton>
                    <Sheet>
                        <SecondaryButton parent="!rounded-md" child="rounded-md px-10">
                            <p className="">Join Free</p>
                        </SecondaryButton>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

