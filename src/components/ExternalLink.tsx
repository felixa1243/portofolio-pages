import { Link } from "@chakra-ui/react";
type Props={
   icon:React.ReactNode;
   href:string;
   isExternal?:boolean;
}
const ExternalLink = (props:Props) => (
  <Link
    fontSize="xl"
    fontWeight={500}
    fontFamily="heading"
    color="brand.black"
    my={5}
    href={props.href}
    isExternal={!props.isExternal?true:props.isExternal}
  >
    {props.icon}
  </Link>
);
export default ExternalLink
