import {FC} from 'react'

type Skillset={
  title:string,
  icon:React.FC,
  description:string
}
const skillList:Skillset[]=[
  {
    title:'React',
    icon:<AiOutlinedGithub/>,
    description:'Intermediated level, have common knowledge of react fundamental and it\'s ecosystem'
  },
  {
    
  },
  {
    
  },
  {
    title:'Typescript',
    icon:<TypescriptIcon/>,
    description:'Basic'
  }
  ]
const GridSection=props=>{
  <SkillCard
                title={'HTML5'}
                icon={<Icon
                as={AiFillHtml5}
                color={'orange.400'}
                boxSize={'5em'}
                />}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur natus in vitae illum fugiat dolores corrupti quia, minus eius voluptatum cupiditate corporis magni, repudiandae assumenda? Vitae quaerat distinctio suscipit mollitia?'}
                />
}