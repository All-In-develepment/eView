import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";


interface ArticleCardProps {
    img: string;
    title: string;
    desc: string;
  }
  
  export function ArticleCard({ img, title, desc }: ArticleCardProps) {
    return (
      <Card
        className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
        color="transparent" placeholder={'alguma coisa'}
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <CardBody className="relative flex flex-col justify-end" placeholder={'alguma coisa'}>
          <Typography variant="h4" color="white" placeholder={'alguma coisa'}>
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="my-2 font-normal" placeholder={'alguma coisa'}
          >
            {desc}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  export default ArticleCard;