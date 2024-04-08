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
  
  desc: "The Connection Package focuses on parent-child relationships and family systems theory, to enhance parenting skills to better manage behaviours from a connection lens.",

  text: "The Connection Package assesses family dynamics, parenting styles, and child development. Following a concise family intake, strategies are provided to increase parenting capacity and to activate child development skills.",

    themes:[
      " Attachment and Child development \n", 
      " Brain development \n",	
      " Social and emotional development \n" ,
      " Parent self-care and burn-out \n",
      " Spousal and parenting relationship\n "	,
      " Humour and love \n",
  ]
}
,
{id: 2,
   img:feet,
    image:toes,
   
  title: 'CALM PACKAGE',
  sub:  'Baby Massage (BM)',

desc:"The Calm Package focuses on baby massage. Baby massage offers a warm & calm space for parents to connect with their little ones. It uses principles based on attachment theory and the power of touch. Research has shown its potential to enhance stimulation, muscle development, sleep, and foster a strong bond between parent and child.",

text: "Baby massage draws from theories on attachment and intentional touch, and has the potential to calm the central nervous system. You will learn techniques to increase muscle growth and soothe your baby for better sleep."
,

themes: [" Attachment and bonding between parent and baby\n"	,
	" Parent emotional regulation \n", " Parent self-care \n",]

   }
,

{id: 3,
  img:puzzle,
      image:onetwo,
  title: 'CURIOUS PACKAGE',
  sub:  'Professional Development for Early & Primary School Educators',

desc: "If you're an early childhood centre & you're seeking professional development workshops; we tailor sessions based on the needs of the centre. Past workshops have focused on introduction to trauma, enhancing emotional and social development.",

  text: "Workshops are tailored to address the specific requirements of schools and early childhood centres. Educators will receive guidance in recognising children who may benefit from additional support to enhance their play, social, and emotional skills.",


    themes:["Educator-child relationship development \n" , " The invisible child \n",	" Managing challenging behaviours\n " ,
		" Working with vulnerable families and how best to support them\n  ",
	" Trauma and impacts on child development\n"	,
	" Effective communication \n", " Circle of security theory and practical strategies \n"
]

}




]

export default newData