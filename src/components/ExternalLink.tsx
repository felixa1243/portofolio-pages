import { Link } from "@chakra-ui/react";

const ExternalLink = ({ icon, href, ...rest }) => (
  <Link
    fontSize="xl"
    fontWeight={500}
    fontFamily="heading"
    color="brand.black"
    my={5}
    href={href}
    isExternal
    {...rest}
  >
    {icon}
  </Link>
);
export default ExternalLink
