import austinImg from "../../assets/austin.jpg"
import dallasImg from "../../assets/dallas.jpg"
import elpasoImg from "../../assets/el-paso-texas.jpg"
import galvestonImg from "../../assets/Galveston-Island.jpg"
import houstonImg from "../../assets/houston.jpg"
import sanantonioImg from "../../assets/san antonio.jpg"
import wacoImg from "../../assets/waco.jpg"

export const cities: any[] = [
  {
    link: "austin",
  },
  {
    link: "dallas"
  },
  {
    link: "el-paso"
  },
  {
    link: "galveston"
  },
  {
    link: "houston",
  },
  {
    link: "san-antonio",
  }, 
  {
    link: "waco",
  },
];

export const cityData = [
  {
    name: "austin",
    population: "974,447",
    date_established: "1989",
    region: "hill country texas",
    classification: "urban",
    avg_income: "$78,000",
    details:"",
    isCapital: true,
    sights: [
      {
        name:"Capital building",
        description: ""
      },
      {
        name:"Lady bird lake",
        description: ""
      },

    ],
    more_details:"",
    image: '../../assets/austin.jpgImg'
  },
  {
    name: "dallas",
    population: "1,299,544",
    date_established: "1856",
    region: "north texas",
    classification: "urban",
    avg_income: "$85,000",
    details:"",
    isCapital: false,
    sights: [
      {
        name:"",
        description: ""
      },
      {
        name:"",
        description: ""
      },
      {
        name:"",
        description: ""
      },
    ],
    more_details:"",
    image:dallasImg
  },
  {
    name: "el paso",
    population: "677,456",
    date_established: "1873",
    region: "west texas",
    classification: "urban",
    avg_income: "$51,000",
    details:"Details about El Paso",
    isCapital: false,
    sights: [
      {
        name:"",
        description: ""
      },
      {
        name:"",
        description: ""
      },

    ],
    more_details:"",
    image:elpasoImg
  },
  {
    name: "galveston",
    population: "53,089",
    date_established: "1939",
    region: "gulf coast",
    classification: "",
    avg_income: "$42,000",
    details:"A city on an Island",
    isCapital: false,
    sights: [
      {
      name:"",
      description: ""
      },
      {
      name:"",
      description: ""
      },
      {
      name:"",
      description: ""
      },
    ],
    more_details:"",
    image: galvestonImg
  },
  {
    name:"houston",
    population: "2,302,878",
    date_established: "1837",
    region: "gulf coast",
    classification: "urban",
    avg_income: "$57,000",
    details:"",
    isCapital: false,
    sights: [
      {
      name:"",
      description: ""
      },
      {
      name:"",
      description: ""
      },
      {
      name:"",
      description: ""
      },
    ],
    more_details:"",
    image: houstonImg
  },
  {
    name: "san antonio",
    population: "1,472,909",
    date_established: "1837",
    region: "south texas",
    classification: "urban",
    avg_income: "$48,000",
    details:"Home of the Alamo",
    isCapital: false,
    sights: [
      {
      name:"Alamo",
      description: ""
      }, {
      name:"Tower of Americas",
      description: ""
      }, {
      name:"",
      description: "Six Flags Fiesta Texas"
      }, {
      name:"",
      description: ""
      }, 
      {  
      name:"",
      description: ""
      },
    ],
    more_details:"",
    image: sanantonioImg, 
  },
  {
    name: "waco",
    population: "143,984",
    date_established: "1856",
    region: "central texas",
    classification: "rural",
    avg_income: "",
    details:"Home of the Alamo",
    isCapital: false,
    sights: [
      {
      name:"Dr. Pepper Museum",
      description: ""
      }, {
      name:"",
      description: ""
      }, 
    ],
    more_details:"",
    image: wacoImg, 
  }
]
