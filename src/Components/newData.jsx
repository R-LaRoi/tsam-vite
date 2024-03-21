import toes from'./assets/toes.jpeg'
import toys from './assets/toys.jpeg'
import onetwo from './assets/1234.jpeg'
import feet from'./assets/1.png'
import puzzle from './assets/2.png'
import bulb from './assets/3.png'


const newData = [

  { id: 1,
     img:bulb,
      image:toys,
     title: 'CONNECTION PACKAGE',
     sub:  'Parenting Consultation',
  
  desc: "The connection package focuses on parent-child relationships and family systems theory, to enhance parenting skills to better manage behaviours from a connection lens.",

  text: "The connection package assesses family dynamics, parenting styles, and child development. Following a concise family intake, strategies are provided to increase parenting capacity and to activate child development skills.",

    themes:[
      " - Attachment and Child development \n", 
      " - Brain development \n",	
      " - Social and emotional development \n" ,
      " - Parent self-care and burn-out \n",
      " - Spousal and parenting relationship\n "	,
      " - Humour and love \n",
  ]
}
,
{id: 2,
   img:feet,
    image:toes,
   
  title: 'CALM PACKAGE',
  sub:  'Baby Massage (BM)',

desc:"The calm package focuses on baby massage. Baby massage offers a warm & calm space for parents to connect with their little ones. Baby Massage principles are based on attachment theory and the power of touch. Research has shown it's potential to enhance stimulation, muscle development, sleep, and foster a strong bond between parent and child.",

text: "Infant massage draws from attachment theory and intentional touch, backed by research becoming the central nervous system. If you find massages relieving this will resonate with you. You will gain techniques to eat muscle growth and soothe your baby for better sleep. Sessions also include talks on parental emotional regulation and self-care."
   }
,

{id: 3,
  img:puzzle,
      image:onetwo,
  title: 'CURIOUS PACKAGE',
  sub:  'Professional Development for Early & Primary School Educators',

desc: "If you're an early childhood centre & you're seeking professional development workshops; I tailor sessions based on the needs of the centre. Past workshops have focused on introduction to trauma, enhancing emotional and social development.",

  text: "Workshops are tailored to address the specific requirements of schools and early childhood centres. Educators will receive guidance in recognising children who may benefit from additional support to enhance their play, social, and emotional skills.",


    themes:["- Educator-child relationship development \n" , " - The invisible child \n",	" - Managing challenging behaviours\n " ,
		" - Working with vulnerable families and how best to support them\n  ",
	" - Trauma and impacts on child development\n"	,
	" - Effective communication \n", " - Circle of security theory and practical strategies \n"
]

}




]

export const servPkg = [

  { id: 1,
    
  title: 'CONNECTION PACKAGE',
  sub:  'Parenting Consultation',



  }
,
{id: 2,
     
  title: 'CALM PACKAGE',
  sub:  'Baby Massage (BM)',
   desc: "The calm package focuses on baby massage. Baby massage offers a warm & calm space for parents to connect with their little ones. Baby Massage principles are based on attachment theory and the power of touch. Research has shown it's potential to enhance stimulation, muscle development, sleep, and foster a strong bond between parent and child.",
  }
,

{id: 3,
  
  title: 'CURIOUS PACKAGE',
  sub:  'Professional Development for Early & Primary School Educators',
  desc: "If you're an early childhood centre & you're seeking professional development workshops; I tailor sessions based on the needs of the centre. Past workshops have focused on introduction to trauma, enhancing emotional and social development."}



]

export default newData