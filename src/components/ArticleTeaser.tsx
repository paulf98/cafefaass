import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
 
const ArticleTeaser = ({ article }: any) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl" {...storyblokEditable(article)}>
      <figure>    
        <Image
          className="object-cover object-center w-full mb-4 lg:h-48 md:h-36 rounded-t-xl"
          src={article.image.filename}
          alt={article.image.alt}
          width={200}
          height={90}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <p>{article.teaser}</p>
        <div className="card-actions justify-end">
          <Link href={`/blog/${article.slug}`} className="btn btn-primary">Mehr lesen »</Link>
        </div>
      </div>
    </div>
  )
};
export default ArticleTeaser;