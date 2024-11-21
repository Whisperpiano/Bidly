import { useState } from "react";

export default function Gallery() {
  const [selectedPicture, setSelectedPicture] = useState<string>(
    "https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  function handleChangePicture(
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) {
    if (event.currentTarget.src === selectedPicture) return;
    setSelectedPicture(event.currentTarget.src);
  }
  return (
    <article>
      <div>
        <img
          src={selectedPicture}
          alt="alt placeholder"
          className="w-full aspect-video object-cover object-center rounded-lg"
          // style={{ viewTransitionName: `image${img}` }}
        />
      </div>
      <div className="grid grid-cols-5 gap-2 mt-2 animate-reveal">
        <div>
          <img
            src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder 2"
            className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
            onClick={handleChangePicture}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?q=80&w=2566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder 3"
            className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
            onClick={handleChangePicture}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1511268011861-691ed210aae8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder 4"
            className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
            onClick={handleChangePicture}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1480632563560-30f503c09195?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder 5 "
            className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
            onClick={handleChangePicture}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1513519683267-4ee6761728ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder6"
            className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
            onClick={handleChangePicture}
          />
        </div>
      </div>
    </article>
  );
}
