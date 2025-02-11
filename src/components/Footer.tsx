
type Button = {
    src: string,
    title: string,
    url: string
}

const Footer = () =>{
    
    const currentIndex = Number(localStorage.getItem("linkIndex"))??0;

    const ImageButton = [
        {src: "/test-vite/assets/button/home.png",title: "home",url:"/test-vite/"},
        {src: "/test-vite/assets/button/mining.png",title: "mining", url: "/test-vite/mint"},
        {src: "/test-vite/assets/button/attack.png",title: "attack", url: "/test-vite/battle"},
        {src: "/test-vite/assets/button/petlist.png",title:"petlist", url: ""},
        {src: "/test-vite/assets/button/training.png",title: "training", url: "/mission"},
    ]

    const handleSelectIndex = (i:number) =>{
        localStorage.setItem("linkIndex",i.toString())
    }

    return(
        <div className="mt-2 sticky w-full bottom-0">
            <img width={200} height={100} className="w-full h-[108px]" src="/test-vite/assets/background/frame_bottom.png" alt="frame" />
            <div className="absolute top-2 left-0 flex justify-center w-full">
                <div className="flex flex-row gap-2 justify-between w-full px-2 items-center">
                    {ImageButton.map((btn:Button,i:number)=>(
                        <a href={btn.url} key={i} onClick={()=>handleSelectIndex(i)}>
                            <img width={60} height={60} className={currentIndex==i?"w-[80px] h-[80px]":"w-[65px] h-[65px] focus:w-[80px] focus:h-[80px] hover:w-[80px] hover:h-[80px] transition-all delay-100"} src={btn.src} alt={btn.title} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer;