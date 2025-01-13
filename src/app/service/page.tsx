import Sheet from "../components/utils/Sheet";
import LowerTitle from "../components/utils/LowerTitle";
import BreadCrumb from "../components/utils/BreadCrumb";
import CodingSVG from "../components/utils/CodingSVG";
import ReceptionistSVG from "../components/utils/ReceptionistSVG";
import FaceTimeSVG from "../components/utils/FaceTimeSVG";
import { IoPerson } from "react-icons/io5";
import clsx from "clsx";
import ServiceQA from "../components/Contents/service/ServiceQA";

export default async function page() {
  return (
    <Sheet>
      <LowerTitle title="SERVICE" />
      <div className="mb-28">
        <BreadCrumb />
      </div>
      <div className="mb-28">
        <ul>
          <li className="mb-20" id="service01">
            <div className="relative mx-auto mb-10 aspect-square max-w-[500px]">
              <CodingSVG />
            </div>
            <h3 className="mb-8 text-[min(8vw,2rem)] font-kintoSans-medium tracking-wider">
              専門人材派遣
            </h3>
            <p className="mb-8 text-[min(4.27vw,1.3rem)] leading-relaxed tracking-wide">
              当社は、専門的なスキルや知識を有する人材を必要とする企業様に対し、迅速かつ的確なマッチングを提供しています。クラウドエンジニア、バックエンドエンジニア、フロントエンドエンジニア、デザイナー、ディレクターなど、各分野に特化した専門人材の派遣に強みを持ち、プロジェクトベースや長期的な業務ニーズにも柔軟に対応します。
            </p>
            <ServiceQA
              question01="新規プロジェクトや業務拡大で、人手が足りず経験者を急募したい。"
              question02="現場経験はあるが、スキルや知識を正しく評価されない。"
              answer="当社のコーディネーターが、求職者様の経験やスキルを詳細にヒアリングし、企業様の求める役割やスキル要件に最適な人材を提案します。"
            />
          </li>

          <li className="mb-20" id="service02">
            <div className="relative mx-auto mb-10 aspect-square max-w-[500px]">
              <ReceptionistSVG />
            </div>
            <h3 className="mb-8 text-[min(8vw,2rem)] font-kintoSans-medium tracking-wider">
              新卒・中途採用サポート
            </h3>
            <p className="mb-8 text-[min(4.27vw,1.3rem)] leading-relaxed tracking-wide">
              企業の成長に欠かせない「人材の採用」をトータルで支援します。新卒採用における潜在能力の高い人材の発掘から、中途採用での即戦力の採用まで、企業様の課題やニーズに応じた最適な採用戦略を提案します。また、採用活動に伴う煩雑な業務の効率化を図ることで、企業様がコア業務に専念できる環境を提供します。
            </p>
            <ServiceQA
              question01="採用した人材が長期間活躍できるかどうか不安がある。"
              question02="自分のスキルやキャリアが企業の要件に合うか判断できない。"
              answer="採用計画から採用後のフォローアップまで一貫してサポートすることで、企業様と求職者様の双方にとって最適な結果を提供します。私たちは、単なるマッチングではなく、長期的な成功と成長を目指した信頼関係の構築を重視しています。"
            />
          </li>

          <li className="mb-20" id="service03">
            <div className="relative mx-auto mb-10 aspect-square max-w-[500px]">
              <FaceTimeSVG />
            </div>
            <h3 className="mb-8 text-[min(8vw,2rem)] font-kintoSans-medium tracking-wider">
              外国人材の雇用支援
            </h3>
            <p className="mb-8 text-[min(4.27vw,1.3rem)] leading-relaxed tracking-wide">
              グローバル化が進む現代社会において、優れた外国人材の採用は企業の競争力向上に欠かせません。当社では、外国人材の採用から雇用後のフォローアップまで包括的に支援し、文化や言語の違いによる不安を軽減します。さらに、ビザの申請サポートや、外国人労働者がスムーズに職場環境に適応できるよう、研修プログラムも提供しています。
            </p>
            <ServiceQA
              question01="グローバル市場で競争力を高めるため、外国人材を採用したいが方法がわからない。"
              question02="渡航後の住居や生活環境に関するサポートがないと不安。"
              answer="当社はグローバル市場での豊富な経験を基に、外国人材の採用プロセス全般をサポートします。ビザ取得手続きや法的要件の対応から、候補者のスキルや経験の評価、選考プロセスの調整まで、煩雑な業務を一括してサポートします。これにより、初めて外国人材を採用する企業でも安心してプロジェクトを進めることが可能です。"
            />
          </li>
        </ul>
      </div>
    </Sheet>
  );
}
