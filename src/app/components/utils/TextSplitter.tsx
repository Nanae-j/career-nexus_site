import clsx from "clsx";
import React from "react";

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
  let count = 0;

  return words.map((word: string, wordIndex: number) => {
    const splitText = word.split("");
    const isLineBreak = lineBreakWords.includes(word); // 改行チェック

    return (
      <React.Fragment key={`fragment-${wordIndex}`}>
        <span
          className={clsx("split-word", className)}
          style={{ display: wordDisplayStyle, whiteSpace: "pre" }}
        >
          {splitText.map((char, charIndex) => {
            count++;
            if (char === " ") return <span key={`${count}-blank`}>{` `}</span>;
            return (
              <span
                key={`${wordIndex}-${word}-${count}-${charIndex}-${char}`}
                className={`split-char inline-block split-char--${wordIndex}-${charIndex}`}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 ? (
            <span key={`${count}-blank`} className="split-char">
              {` `}
            </span>
          ) : null}
        </span>
        {isLineBreak && <br />} {/* 改行ポイントで <br> を挿入 */}
      </React.Fragment>
    );
  });
}
