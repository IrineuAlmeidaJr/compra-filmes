import { Carousel } from "flowbite-react";

export function CarouselImg() {
    return(        
      <section className="h-72 xl:h-80 2xl:h-96">
        <Carousel>
        <img
            src="https://i0.wp.com/oportaln10.com.br/dinastianerd/wp-content/uploads/2021/07/wittcher-season-2-poster-header.jpg?fit=1920%2C1080&ssl=1"
            alt="..."
          />
          <img
            src="https://www.trekbrasilis.org/tbweblog/wp-content/uploads/2022/05/maxresdefault.jpg"
            alt="..."
          />
          <img
            src="https://entretetizei.com.br/site/wp-content/uploads/2021/08/High-School-Musical-O-Musical-A-SC3A9rie-1024x576-1.png"
            alt="..."
          />
          <img
            src="https://xvcuritiba.com.br/wp-content/uploads/2020/09/WhatsApp-Image-2020-08-24-at-21.24.14.jpeg.webp"
            alt="..."
          />
          <img
            src="https://static.poder360.com.br/2022/09/netflix-the-crown.jpeg"
            alt="..."
          />
        </Carousel>
      </section>
    )
}