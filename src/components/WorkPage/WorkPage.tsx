import { Carousel } from "../Carousel";

const images = [
  "https://live.staticflickr.com/65535/52298797483_b756f8fff4_k.jpg",
  "https://live.staticflickr.com/65535/52299062234_9aa93f9417_k.jpg",
  "https://live.staticflickr.com/65535/52299287290_9d29adadf0_k.jpg",
  "https://live.staticflickr.com/65535/52297809607_83f5fd39de_k.jpg",
];

export const WorkPage = () => {
  return (
    <div className="work-page">
      <Carousel images={images} />
    </div>
  );
};
