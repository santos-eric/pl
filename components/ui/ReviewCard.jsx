import { Image } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from 'next/link'

const ReviewCard = () => {
  return (
       <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">Nov. 18th 2024</p>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
            <p className="text-16-medium line-clamp-1">Eric Santos</p>
        </div>
          <img
            src='/images/youngMan.jpg'
            alt='young man'
            width={48}
            height={48}
            className="rounded-full"
          />
      </div>
        <p className="startup-card_desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt corporis dolorem dolores saepe voluptatem id natus quis debitis amet omnis, nisi adipisci, fuga optio veritatis odit porro earum, quo dicta nam cupiditate delectus illum tenetur distinctio? Perferendis ratione voluptatum quod tenetur fuga? Eligendi voluptas numquam tempora laudantium dignissimos expedita assumenda, vel distinctio quibusdam eveniet dicta aperiam ratione est reiciendis nulla maiores? Hic maxime unde consequatur aliquid similique inventore in enim. Sunt mollitia dolores commodi, ex, deleniti numquam minima a vero ullam obcaecati, odio adipisci nostrum similique iste blanditiis eos. Expedita impedit atque minima modi eius accusamus voluptatem velit doloribus.</p>

    </li>
  )
}

export default ReviewCard