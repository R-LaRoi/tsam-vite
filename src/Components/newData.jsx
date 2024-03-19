import toes from'./assets/toes.jpeg'
import toys from './assets/toys.jpeg'
import onetwo from './assets/1234.jpeg'

const newData = [

  { id: 1,
    image:toes,
  title: 'CONNECTION PACKAGE',
  sub:  'Parenting Consultation',
  text: "The connection package assesses family dynamics, parenting styles, and child development. Following a concise family intake, strategies are provided to increase parenting capacity and to activate child development skills.",

  themes:["Attachment and Child development" , "Brain development",	"Social and emotional development" ,
		"Parent self-care and burn- out ",
	"Spousal and parenting relationship "	,
	"Humour and love ",
]
}
,
{id: 2,
      image:toys,
  title: 'CALM PACKAGE',
  sub:  'Baby Massage (BM)',

  text: "Infant massage draws from attachment theory and intentional touch, backed by research becoming the central nervous system. If you find massages relieving this will resonate with you. You will gain techniques to eat muscle growth and soothe your baby for better sleep. Sessions also include talks on parental emotional regulation and self-care."}
,

{id: 3,
      image:onetwo,
  title: 'CURIOUS PACKAGE',
  sub:  'Professional Development for Early & Primary School Educators',

  text: "Workshops are tailored to address the specific requirements of schools and early childhood centres. Educators will receive guidance in recognising children who may benefit from additional support to enhance their play, social, and emotional skills.",

    themes:[	" Educator-child relationship development" , "The invisible child ",	"Managing challenging behaviours " ,
		"Working with vulnerable families and how best to support them  ",
	"Trauma and impacts on child development"	,
	"Effective communication ", "Circle of security theory and practical strategies "
]
}




]

export default newData