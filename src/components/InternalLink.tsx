import {
  LinkOverlay
} from '@chakra-ui/react'
type Props={
  link:string,
  children:React.ReactChild
}
export default function InternalLink({...Props},{...rest}){
  return (
    <LinkOverlay>
    </LinkOverlay>
    )
}