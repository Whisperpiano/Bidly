import HeroItem from "./HeroItem";

//TODO como en plantagen? No me gusta el disenyo

export default function Hero() {
  return (
    <section>
      <HeroItem isMain={false} />
      <div className="grid grid-cols-3 gap-4 pt-4">
        <HeroItem isMain={false} />
        <HeroItem isMain={false} />
        <HeroItem isMain={false} />
      </div>
    </section>
  );
}
