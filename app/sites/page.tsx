import "./sites.css";
import  Footer from "../components/Footer";
import Link from 'next/link'
// icons
import { SiWebtrees } from "react-icons/si";
import { FaYoutube } from "react-icons/fa"; 
import { IoArrowBackCircle } from "react-icons/io5";
import { FcFrame } from "react-icons/fc";
import { PiCodeSimpleThin } from "react-icons/pi";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { LuClipboardSignature } from "react-icons/lu";
import { MdMonochromePhotos } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { LuFileJson } from "react-icons/lu";
import { MdDomain } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

import { APISites  ,channel, articlesSites ,bootstrapSites ,cssSites,designSites,domainsSites,frameworksSites,jsSites,librariesSites,mainSites,photoesSites,tailwindSites ,styles } from './data'
const Sites = () => {
 
  return (

<>
<Link  href="/">

<button className="go-back" > <IoArrowBackCircle className='inline text-3xl'/> Go Back </button>
</Link>
<h1 className="  text-white my-5   hover:cursor-pointer max-w-fit  text-3xl  hover:scale-150 text-center m-auto ">Sites</h1>
<p className="text-white my-5 text-center " >Some of sites has important in developing</p>

{/* main sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><SiWebtrees className="inline text-3xl"/> Main Sites</p>
<div className="cards">
{
         mainSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* libraries sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><IoLibrary className="inline text-3xl"/> Libraries Sites</p>
<div className="cards">
{
         librariesSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>
{/* Youtube Channel */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8 w-fit" ><FaYoutube className="inline text-3xl"/> Youtube Channel</p>
<div className="cards">
{
         channel.map((val , i) => (
            <Link  href="sites">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="tip text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
       
</div>

{/* styles sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><PiCodeSimpleThin className="inline text-3xl"/>Styles Sites</p>
<div className="cards">
{
         styles.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* css sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><FaCss3 className="inline text-3xl"/>CSS Sites</p>
<div className="cards">
{
         cssSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* bootstrap sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><FaBootstrap className="inline text-3xl"/>Bootstrap Sites</p>
<div className="cards">
{
         bootstrapSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* tailwind sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><SiTailwindcss className="inline text-3xl"/>Tailwind Sites</p>
<div className="cards">
{
         tailwindSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* js sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><FaJsSquare className="inline text-3xl"/>JS Sites</p>
<div className="cards">
{
         jsSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* frameworks sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><FcFrame className="inline text-3xl"/>Frameworks Sites</p>
<div className="cards">
{
         frameworksSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* design sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><LuClipboardSignature className="inline text-3xl"/>Design Sites</p>
<div className="cards">
{
         designSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* photoes sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><MdMonochromePhotos className="inline text-3xl"/>Photoes Sites</p>
<div className="cards">
{
         photoesSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* articiles sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><MdArticle className="inline text-3xl"/>Articles Sites</p>
<div className="cards">
{
         articlesSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* API sites */}
<p className="text-white my-7 text-xl ml-6 hover:ml-8  w-fit" ><LuFileJson className="inline text-3xl"/>API Sites</p>
<div className="cards">
{
         APISites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>

{/* Domains sites */}
<p className="text-white mt-7 ml-6  text-xl hover:ml-8  w-fit" ><MdDomain className="inline text-3xl"/>Domains Sites</p>
<div className="cards mb-28">
{
         domainsSites.map((val , i) => (
            <Link  href={val.refLink} target="_blank">
            <div className="card red">
                <p className="tip">{val.title}</p>
                <p className="text-5xl">{val.icon}</p>
                <p className="second-text">{val.desc}</p>
            </div>
        </Link>
          ))
      }
</div>
<Footer/>
</>
  )
}

export default Sites


// // main sites 
// const mainSites =[
//     {
//       title:"W3Schools",
//       icon: <DiW3C  />,
//       desc: "With the world's largest web developer site.",
//       refLink : "https://www.w3schools.com/"
    
//     },
//     {
//       title:"Mdn Web Docs",
//       icon: <SiMdnwebdocs  />,
//       desc: "Resources for Developers,by Developers",
//       refLink : "https://developer.mozilla.org/en-US/"
    
//     },
//     {
//       title:"NPM" ,
//       icon: <TbBrandNpm  />,
//       desc: " job is building and selling useful tools for developers like you",
//       refLink : "https://www.npmjs.com/"
    
//     },
//     {
//       title:"Zod",
//       icon: <SiZod  />,
//       desc: "TypeScript-first schema validation with static type inference",
//       refLink : "https://zod.dev/?id=table-of-contents"
    
//     },
//     {
//       title:"Github",
//       icon: <FaGithub  />,
//       desc: "Contribute to the open source community, manage your Git repositories, review code like a pro",
//       refLink : "https://github.com/"
    
//     },
//     {
//       title:"Git",
//       icon: <FaGitSquare  />,
//       desc: "Git is a powerful and fast tool for managing projects of any size with features like cheap local branching, convenient staging areas, and multiple workflows. ",
//       refLink : "https://github.com/"
    
//     },
//     {
//       title:"Stack Overflow",
//       icon: <FaStackOverflow  />,
//       desc: "Where Developers Learn, Share, & Build Careers. Communities for your favorite technologies",
//       refLink : "https://stackoverflow.com/"
    
//     },
//     {
//       title:"Free Frontend",
//       icon: <CiNoWaitingSign  />,
//       desc: "Discover our curated collection of over 10,000+ free code snippets in HTML, CSS, JavaScript, Bootstrap ...",
//       refLink : "https://stackoverflow.com/"
    
//     },
    
//     {
//       title:"ٌReddit",
//       icon: <FaReddit  />,
//       desc: "Developers comunity",
//       refLink : "https://www.reddit.com/"
    
//     },
//     {
//       title:"flaticon",
//       icon: <h2>FLATICON</h2>,
//       desc: "Access 17.3M+ vector icons & stickers",
//       refLink : "https://www.flaticon.com/"
    
//     },
//     {
//       title:"Sitepoint",
//       icon: <SiSitepoint/>,
//       desc: "Access a library of books and courses on JavaScript, Python, AI, and more!",
//       refLink : "https://www.sitepoint.com/"
    
//     },
//     {
//       title:"Workik",
//       icon: <h2>workik</h2> ,
//       desc: "Activate AI Assistance For Programming",
//       refLink : "https://workik.com/"
    
//     },
//     {
//       title:"Lucide",
//       icon: <h2>Lucide</h2> ,
//       desc: "Beautiful consistent icons and SVG",
//       refLink : "https://lucide.dev/"
    
//     },
//     {
//       title:"Emojiterra",
//       icon: <BsEmojiHeartEyesFill/> ,
//       desc: "Beautiful Emojies",
//       refLink : "https://emojiterra.com/"
    
//     },
// ]
// import { BsEmojiHeartEyesFill } from "react-icons/bs";

// import { SiSitepoint } from "react-icons/si";
// // channel 
// const channel =[
//   {
//     title:"React",
//     icon: <FaVideo  />,
//     desc: "React Js Arabic course",
//     refLink : "https://youtu.be/p8nOfP2fw24?list=PLQtNtS-WfRa9LbmD8ON7rWhn-AtKTGdkn"
  
//   },
//   {
//     title:"React",
//     icon: <FaVideo  />,
//     desc: "React Js Arabic course",
//     refLink : "https://www.youtube.com/watch?v=p8nOfP2fw24&list=PLQtNtS-WfRa9LbmD8ON7rWhn-AtKTGdkn&index=1"
  
//   },
    
// ]
// import { FaVideo } from "react-icons/fa6";
// // style 
// const styles =[
//   {
//     title:"Emojies",
//     icon: <MdEmojiEmotions  />,
//     desc: "Discover all emojies you need",
//     refLink : "https://emojipedia.org/"
  
//   },
//   {
//     title:"Daisy UI",
//     icon: <SiDaisyui  />,
//     desc: "daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever.d",
//     refLink : "https://daisyui.com/"
  
//   },
//   {
//     title:"Color Hunt",
//     icon: <IoIosColorPalette  />,
//     desc: "Mixture and sutable color palettes",
//     refLink : "https://colorhunt.co/"
  
//   },
//   {
//     title:"UI Kit",
//     icon: <FaUikit  />,
//     desc: "UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces.",
//     refLink : "https://getuikit.com/"
  
//   },
//   {
//     title:"PGBS",
//     icon: <h1>PGBs</h1>,
//     desc: "CSS effects and hover",
//     refLink : "https://www.proglobalbusinesssolutions.com/css-hover-effects/"
  
//   },
//   {
//     title:"Colors",
//     icon: <AiOutlineBgColors/>,
//     desc: "Colors generator and palet",
//     refLink : "https://coolors.co/"
  
//   },
//   {
//     title:"PatternFly",
//     icon: <TbGridPattern/>,
//     desc: "new styles, code samples, and documentation",
//     refLink : "https://www.patternfly.org/"
  
//   },
//   {
//     title:"UIVERSE",
//     icon: <h2>UIVERSE</h2>,
//     desc: "A progress stepper displays a timeline of tasks in a workflow and tracks the user's current progress through this workflow.",
//     refLink : "https://www.patternfly.org/components/progress-stepper/html/"
  
//   },
//   {
//     title:"Progress stepper",
//     icon: <TbProgress/>,
//     desc: "The Largest Library of Open-Source UI",
//     refLink : "https://uiverse.io/"
  
//   },
// ]
// import { FaUikit } from "react-icons/fa";
// import { AiOutlineBgColors } from "react-icons/ai";
// import { TbGridPattern } from "react-icons/tb";
// import { TbProgress } from "react-icons/tb";

// // css 
// const cssSites =[
//   {
//     title:"Pure CSS Loaders",
//     icon: <AiOutlineLoading3Quarters className="animate-spin"  />,
//     desc: "Open source CSS loading animations dedicated for speed, simplicity & dev-friendly",
//     refLink : "https://loading.io/css/"
  
//   },
//   {
//     title:"CSS Tricks ",
//     icon: <DiCssTricks   />,
//     desc: " powered by DigitalOcean. Keep up to date on web dev. with our hand-crafted newsletter. DigitalOcean. About DO; Cloudways; Legal stuff; Get free credit!",
//     refLink : "https://css-tricks.com/"
  
//   },
//   {
//     title:"CSS Matic ",
//     icon: <h2>cssmatic</h2>,
//     desc: "The ultimate CSS tools for web designers",
//     refLink : "https://www.cssmatic.com/"
  
//   },
  
// ]

// // bootstrap 
// const bootstrapSites =[
//   {
//     title:"Bootstrap",
//     icon: <FaBootstrap  />,
//     desc: "Build fast, responsive sites",
//     refLink : "https://getbootstrap.com/"
  
//   },
//   {
//     title:"MDB",
//     icon: <FaMdb  />,
//     desc: "open-source UI Kits Material Design for Bootstrap ",
//     refLink : "https://mdbootstrap.com/"
  
//   },
  
// ]


// // tailwind 
// const tailwindSites =[
//   {
//     title:"Material Tailwind",
//     icon: <TbCircleLetterMFilled  />,
//     desc: "The Tailwind CSS Components Library For Coding 10x Faster",
//     refLink : "https://www.material-tailwind.com/"
  
//   },
//   {
//     title:"Pagedone.io",
//     icon: <RiTailwindCssLine   />,
//     desc: "Lightning fast modern designs for your next project",
//     refLink :"https://pagedone.io/"
  
//   },
//   {
//     title:"Flowbite",
//     icon: <RiTailwindCssLine   />,
//     desc: "Build websites even faster with components on top of Tailwind CSS",
//     refLink :"https://flowbite.com/"
  
//   },
//   {
//     title:"Tailwindcss Animated",
//     icon: <MdAnimation   />,
//     desc: "Build your custom animations with ease",
//     refLink :"https://www.tailwindcss-animated.com/"
  
//   },
//   {
//     title:"Tailwind CSS Animated",
//     icon: <MdAnimation   />,
//     desc: "Build your custom animations with ease simple design",
//     refLink :"https://tailwindcss-animations.vercel.app/"
  
//   },
//   {
//     title:"React & Tailwind Animated ",
//     icon: <MdAnimation   />,
//     desc: "Addicting, interactive, animated UI components and templates for  React,  Tailwind CSS, Framer motion logo Framer Motion",
//     refLink :"https://www.hover.dev/"
  
//   },
//   {
//     title:"Aceternity UI",
//     icon: <MdAnimation   />,
//     desc: "Copy paste the most trending components and use them in your websites",
//     refLink :"https://ui.aceternity.com/"
  
//   },
//   {
//     title:"Aceternity UI",
//     icon: <MdAnimation   />,
//     desc: "Fully Coded UI Tools to create web and mobile apps",
//     refLink :"https://www.creative-tim.com/"
  
//   },
//   {
//     title:"TailwindFlex",
//     icon: <RiTailwindCssFill     />,
//     desc: "Tailwind CSS Components Library",
//     refLink :"https://tailwindflex.com/"
  
//   },
//   {
//     title:"Design Tools Hub",
//     icon: <RiPaintBrushFill />,
//     desc: "tool generator  for designers",
//     refLink : "https://www.designtoolshub.com/"
  
//   },
// ]

// // js 
// const jsSites =[
//   {
//     title:"Emojies",
//     icon: <CiNoWaitingSign  />,
//     desc: "Discover our curated collection of over 10,000+ free code snippets in HTML, CSS, JavaScript, Bootstrap ...",
//     refLink : "https://emojipedia.org/"
  
//   },
  
// ]

// // frameworks 
// const frameworksSites =[
//   {
//     title:"MongoDB",
//     icon: <SiMongodb  />,
//     desc: "MongoDB is a versatile database that supports transactions, search, AI, and flexible documents",
//     refLink : "https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/"
  
//   },
//   {
//     title:"Node.js",
//     icon: <TbBrandNodejs  />,
//     desc: "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts",
//     refLink : "https://nodejs.org/en/"
  
//   },
  
// ]

// // design 
// const designSites =[
//   {
//     title:"FREEP!K",
//     icon: <h2>FREEP!K</h2>,
//     desc: "High-quality photos, videos, vectors, PSD, AI images, icons... to go from ideas to outstanding designs",
//     refLink : "https://www.freepik.com/"
  
//   },
//   {
//     title:"PicWish",
//     icon: <h2>PicWish</h2>,
//     desc: "Your all-in-one free AI photo editor. Create professional photos and bring your ideas to life effortlessly",
//     refLink : "https://picwish.com/"
  
//   },
//   {
//     title:"Arabic Fonts",
//     icon: <RiFontSize />,
//     desc: "all arabic fonts design",
//     refLink : "https://arbfonts.com/"
  
//   },
//   {
//     title:"Material Design",
//     icon: <SiMaterialdesign />,
//     desc: "Google’s open-source design system. Design and build beautiful, usable products with Material 3.",
//     refLink : "https://m3.material.io/"
  
//   },
//   {
//     title:"Typescale",
//     icon: <LuType/>,
//     desc: "Select all typing size ",
//     refLink : "https://typescale.com/"
  
//   },
  
  
// ]
// import { RiPaintBrushFill } from "react-icons/ri";

// import { LuType } from "react-icons/lu";

// // photoes 
// const photoesSites =[
//   {
//     title:"Pinterest",
//     icon: <FaPinterest  />,
//     desc: "All photoes you need",
//     refLink : "https://www.pinterest.com/"
  
//   },
//   {
//     title:"Pixels",
//     icon: <SiPixelfed  />,
//     desc: "The best free stock photos, royalty free images & videos shared by creators.",
//     refLink : "https://www.pexels.com/"
  
//   },
//   {
//     title:"Unsplash",
//     icon: <FaUnsplash  />,
//     desc: "The internet’s source for visuals. Powered by creators everywhere",
//     refLink : "https://unsplash.com/"
  
//   },
//   {
//     title:"Tinypng",
//     icon: <SiFoodpanda  />,
//     desc: "Smart WebP, PNG and JPEG Compression for Faster Websites",
//     refLink : "https://tinypng.com/"
  
//   },
  
// ]

// // API 
// const APISites =[
//   {
//     title:"Emojies",
//     icon: <CiNoWaitingSign  />,
//     desc: "Discover our curated collection of over 10,000+ free code snippets in HTML, CSS, JavaScript, Bootstrap ...",
//     refLink : "https://emojipedia.org/"
  
//   },
  
// ]

// // articles 
// const articlesSites =[
//   {
//     title:"Types vs. interfaces in TypeScript",
//     refLink : "https://blog.logrocket.com/types-vs-interfaces-typescript/"
  
//   },
//   {
//     title:"Frontend Developer Roadmap",
//     refLink : "https://roadmap.sh/frontend"
  
//   },
  
//   {
//     title:"metwally Roadmap",
//     refLink : "https://metwallylabs.com/frontendroadmap.html"
  
//   },
  
// ]

// // Domains 
// const domainsSites =[
//   {
//     title:"namech_k",
//     icon: <SiNamecheap  />,
//     desc: "Check over 30 DOMAINS and more than 90 social media accounts",
//     refLink : "https://namechk.com/"
  
//   },
  
// ]
// // libraries 
// const librariesSites =[
//   {
//     title:"React-toastify",
//     icon: <IoIosNotifications  />,
//     desc: "React-Toastify is a npm package that lets you add notifications to your React app with ease",
//     refLink : "https://fkhadra.github.io/react-toastify/introduction"
  
//   },
//   {
//     title:"Releases React Hook Form",
//     icon: <FaWpforms  />,
//     desc: "Performant, flexible and extensible forms with easy-to-use validation",
//     refLink : "https://react-hook-form.com/"
  
//   },
//   {
//     title:"Hover.css",
//     icon: <h2>Hover CSS</h2>,
//     desc: "A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on",
//     refLink : "https://ianlunn.github.io/Hover/"
  
//   },
 
//   {
//     title:"Font Awesome",
//     icon: <FaFontAwesome  />,
//     desc: "Font Awesome is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators.",
//     refLink : "https://fontawesome.com/"
  
//   },
 
//   {
//     title:"Google Fonts ",
//     icon: <SiGooglefonts  />,
//     desc: "All fonts arabic and english ",
//     refLink : "https://fonts.google.com/"
  
//   },
//   {
//     title:"Animate.css ",
//     icon: <MdOutlineAnimation  />,
//     desc: "Make some animate by css ",
//     refLink : "https://animate.style/"
  
//   },
//   {
//     title:"React Bootstrap ",
//     icon: <SiReactbootstrap  />,
//     desc: "Bootstrap for React. ",
//     refLink : "https://react-bootstrap.netlify.app/"
  
//   },
 
  
// ]
// import { SiReactbootstrap } from "react-icons/si";