'use client'
import Image from "next/image"

const ExploreBtn = () => {




  return (

    <div>

      <button onClick={() => { console.log('hello ') }}
        type="button"
        id="explore-btn"
        className="mt-7 mx-auto"
      >
        <a href="#events">
          Explore Events
          <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={2}>
          </Image>
        </a>
      </button>
    </div>
  )
}

export default ExploreBtn
