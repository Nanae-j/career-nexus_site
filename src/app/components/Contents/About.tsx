import Image from "next/image";
import Button from "../Button";

const About = () => {
  return (
    <section className="bg-main-black pb-[12.5rem] pt-60">
      <div>
        <div className="relative z-[2] mx-auto mb-[7.5rem] w-[75%] max-w-[1200px]">
          <h2 className="font-kintoSans-medium mb-12 font-kintoSans text-[2.5rem] leading-[180%] tracking-wider text-white">
            キャリアの地図を、
            <br className="md:hidden" />
            共に描く
          </h2>
          <p className="font-kintoSans-medium mb-16 font-kintoSans leading-[240%] tracking-wider text-white md:w-[48%] md:min-w-[520px]">
            私たちは、人材と企業をつなぐパートナーです。一人ひとりの可能性を最大限に引き出し、新しい働き方や挑戦の場を提供しています。個性や強みを活かせる環境で、自分らしく輝けるキャリアを。夢や目標に向かって一歩を踏み出すとき、私たちがそばで支えます。『あなたらしいキャリア』を一緒に見つけるお手伝いをさせてください。
          </p>
          <div className="w-[166px]">
            <Button href={"/about"} label={"Read More"} />
          </div>
        </div>

        <div className="mx-auto w-[80%] overflow-hidden rounded-[1.3rem]">
          <Image
            src="/images/about-bg.jpg"
            alt="キャリアの地図を、共に描く"
            width={1600}
            height={900}
            className="saturate-[0.2] filter"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
