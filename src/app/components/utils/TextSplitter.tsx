import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
  wordDisplayStyle?: "inline-block" | "block";
  lineBreakWords?: string[];
};

export function TextSplitter({
  text,
  className,
  wordDisplayStyle = "inline-block",
  lineBreakWords = [],
}: Props) {
  if (!text) return null;

  const words = text.split(" ");

  return words.map((word: string, wordIndex: number) => {
    const splitText = word.split("");
    const isLineBreak = lineBreakWords.includes(word); // 改行チェック

    return (
      <>
        <span
          className={clsx("split-word", className)}
          style={{ display: wordDisplayStyle, whiteSpace: "pre" }}
          key={`${wordIndex}-${word}`}
        >
          {splitText.map((char, charIndex) => {
            if (char === " ") return ` `;
            return (
              <span
                key={charIndex}
                className={`split-char inline-block split-char--${wordIndex}-${charIndex}`}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 ? (
            <span className="split-char">{` `}</span>
          ) : null}
        </span>
        {isLineBreak && <br />} {/* 改行ポイントで <br> を挿入 */}
      </>
    );
  });
}
