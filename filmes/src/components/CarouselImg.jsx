import { Carousel } from "flowbite-react";

export function CarouselImg() {
    return(        
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://4.bp.blogspot.com/-Nf80hDmwHXE/WkVAFCpLJkI/AAAAAAAARyU/2UYxmHdrgJw21E3ccwQJFXOUvzCe-S4uQCLcBGAs/s1600/bright-banner.png"
            alt="..."
          />
          <img
            src="https://oimparcial.com.br/app/uploads/2020/09/Dunkirk-banner-1024x538.jpg"
            alt="..."
          />
          <img
            src="https://comicbookmovie.com/images/articles/banners/194585.jpg"
            alt="..."
          />
          <img
            src="https://xvcuritiba.com.br/wp-content/uploads/2020/09/WhatsApp-Image-2020-08-24-at-21.24.14.jpeg.webp"
            alt="..."
          />
          <img
            src="https://img.olhardigital.com.br/wp-content/uploads/2022/05/Thor-Amor-e-Trovao.png"
            alt="..."
          />
        </Carousel>
      </div>
    )
}