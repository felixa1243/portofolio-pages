import { Link } from "@chakra-ui/react";
type Props={
   icon:React.ReactChild;
   href:string;
   isExternal?:bool;
}
const ExternalLink = (props:Props) => (
  <Link
    fontSize="xl"
    fontWeight={500}
    fontFamily="heading"
    color="brand.black"
    my={5}
    href={props.href}
    isExternal={false}
  >
    {props.icon}
  </Link>
);
export default ExternalLink
