import {
  LinkOverlay
} from '@chakra-ui/react'
type Props={
  link:string,
  children:React.ReactNode
}
const InternalLink:React.FunctionComponent<Props> =(props)=>{
  return (
    <LinkOverlay href={props.link}>
    {props.children}
    </LinkOverlay>
    )
}
export default InternalLink
