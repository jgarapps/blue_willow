import austinImg from "../../assets/austin.jpg"


export const pages: any[] = [
  {
    link: "services",
  },
  {
    link: "gallery",
  },
  {
    link: "about-us",
  },
];

export const cities: any[] = [
  {
    link: "austin",
  },
  {
    link: "dallas"
  },
  {
    link: "el paso"
  },
  {
    link: "galveston"
  },
  {
    link: "houston",
  },
  {
    link: "san antonio",
  }, 
];

export const cityData = [
   {name: "austin",
   data: [
      {details:""},
      {sights: []},
      {more_details:""},
      {image: austinImg}
    ],
  },
    {name: "dallas",
    data: [
      {details:""},
      {sights: []},
      {more_details:""},
      {image:"../assets/dallas.jpg"}
    ],
  },
    {name: "el_paso",
    data: [ 
      {details:"Details about El Paso"},
      {sights: []},
      {more_details:""},
      {image:"../assets/el-paso-texas.jpg"}
    ],
  },
    {name: "galveston",
    data:  [
      {details:""},
      {sights: []},
      {more_details:""},
      {image:"../assets/galveston-island.jpg"}
    ],
  },
    {name:"houston",
    data: [
      {details:""},
      {sights: []},
      {more_details:""},
      {image:"../assets/houston.jpg"}
    ],
  },
   {name: "san_antonio",
   data: [
      {details:""},
      {sights: []},
      {more_details:""},
      {image:"../assets/san_antonio.jpg"}
    ],}
]
