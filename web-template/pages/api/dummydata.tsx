import vintageBG from "../../assets/vintage-BG.jpg"
import image1 from "../../assets/candle_img.webp"
// boudoir
import boudoir1 from "../../assets/boudoir/boudoir1.jpg"
import boudoir2 from "../../assets/boudoir/boudoir2.jpg"
import boudoir3 from "../../assets/boudoir/boudoir3.jpg"

// glamour
import glam1 from "../../assets/glam/glam1.jpg"
import glam2 from "../../assets/glam/glam2.jpg"
import glam3 from "../../assets/glam/glam3.jpg"
import glam4 from "../../assets/glam/glam4.jpg"
import glam5 from "../../assets/glam/glam5.jpg"
import glam6 from "../../assets/glam/glam6.jpg"
import glam7 from "../../assets/glam/glam7.jpg"

// pinup
import pinup1 from "../../assets/pinup/pinup1.jpg"
import pinup2 from "../../assets/pinup/pinup2.jpg"

// alternative 
import alt1 from "../../assets/alternative/alt1.jpg"
import alt2 from "../../assets/alternative/alt2.jpg"
import alt3 from "../../assets/alternative/alt3.jpg"
import alt4 from "../../assets/alternative/alt4.jpg"
import alt5 from "../../assets/alternative/Image-alt5.jpg"

// about us
import familyImg from "../../assets/aboutus/JawishFamily20.jpg"
import achaishaImg from"../../assets/aboutus/gildedglamour.jpg"
import bobbieImg from "../../assets/aboutus/bobbie_headshot.jpg"

export const slugs: any[] = [
  {
    link: "portfolios",
  },
  
  {
    link: "about"
  },
  {
    link: "contact"
  },
];

export const slugData = [
  {  
    name: "portfolios",
    details:"",
    more_details:"",
    image: vintageBG.src,
    images: [
      { 
        image: pinup1.src,
        blurb: "Pin Up Sessions",
        link: "pin up",
        
      },
      { 
        image: boudoir3.src,
        blurb: "Boudoir Sessions",
        link: "boudoir",

      },
      {    
        image: alt4.src,
        blurb: "Alternative",
        link: "alternative",

      },
      {    
        image: glam2.src,
        blurb: "Glam",
        link: "glam",

      }
    ] 
   
  
  },
  {
    name: "boudoir",
    details:"",
    more_details:"",
    image: vintageBG.src,
    images: [
      { 
        image: boudoir1.src,
        blurb: "some text",
      },
      {    
        image: boudoir2.src,
        blurb: "",
      },
      {    
        image: boudoir3.src,
        blurb: "",
      },
    ] 


  },
  {  
    name: "pin up",
    details:"",
    more_details:"",
    image: vintageBG.src,
    images: [
      { 
        image: glam1.src,
        blurb: "",
      },
      {    
        image: glam2.src,
        blurb: "",
      },
      {    
        image: image1.src,
        blurb: ""
      }
    ] 
   
  
  },
  {  
    name: "glam",
    details:"",
    more_details:"",
    image: vintageBG.src,
    images: [
      { 
        image: glam1.src,
        blurb: "",
      },
      {    
        image: glam2.src,
        blurb: "",
      },
      {    
        image: glam3.src,
        blurb: ""
      },
      {    
        image: glam4.src,
        blurb: ""
      },
      {    
        image: glam5.src,
        blurb: ""
      },
      {    
        image: glam6.src,
        blurb: ""
      },
      {    
        image: glam7.src,
        blurb: ""
      },
    ] 
   
  
  },
  {  
    name: "alternative",
    details:"",
    more_details:"",
    image: vintageBG.src,
    images: [
      { 
        image: alt1.src,
        blurb: "",
      },
      {    
        image: alt2.src,
        blurb: "",
      },
      {    
        image: alt3.src,
        blurb: ""
      },
      {    
        image: alt4.src,
        blurb: ""
      },
      {    
        image: alt5.src,
        blurb: ""
      }
    ] 
   
  
  },
]


export const about_us = [
  {
  achaisha: achaishaImg,
  bobbie: bobbieImg ,
  details:"Hey there! My name is Bobbie and I’ve been doing photography since there was just film. I am a momma to two beautiful girls, a wife to a zany guy, and we have three insane dogs that are always trying to cuddle. My husband and I are both ridiculously big nerds with all things video games, movies, books and more. ",
  more_details1: "You’ll often find me in my free time going for nature walks looking for flowers or cool rocks, or even brewing a nice cup of tea or coffee to enjoy while chilling on the patio when it’s nice out. Women’s Empowerment has come to be my favorite category of photography mostly because of a few reasons. It showcases the strength, resilience, and diversity of women. Seeing images of empowered women can inspire and empower others. It can serve as a reminder that women are capable of achieving great things and can break barriers in various fields.",
  more_details2:"Above all my favorite part about what I do is often the reveal of the gallery. Showing women just how utterly strikingly beautiful inside and out they really are always gets to me….",
  image: familyImg.src,
  images: [
    { 
      image_2: image1.src,
      blurb: "",
    },
    {    
      image_3: image1.src,
      blurb: "",
    },
    {    
      image_4: image1.src,
      blurb: ""
    }
  ] 
}
]



