import Logo from "./logo"
import NextLink from "next/link"

type Props = {
  href: string,
  path: string,
  target: any,
  children: React.ReactNode
}


const LinkItem = ({ href, path, target, children, ...props }: Props) => {
  const active = path === href
  const inactiveText = () => {
    console.log("unactive");
  }
  return (
    <NextLink>
    </NextLink>
  )
} 
