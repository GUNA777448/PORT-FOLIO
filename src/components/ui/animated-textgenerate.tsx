import { useEffect, useMemo, useState } from "react";
import { clsx } from "../../utils/clsx";

type AnimatedTextGenerateProps = {
  className?: string;
  textClassName?: string;
  text: string;
  blurEffect?: boolean;
  speed?: number;
  highlightWords?: string[];
  highlightClassName?: string;
  linkWords?: string[];
  linkHrefs?: string[];
  linkClassNames?: string[];
};

function normalizeToken(token: string) {
  return token.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
}

export function AnimatedTextGenerate({
  className,
  textClassName,
  text,
  blurEffect = false,
  speed = 1,
  highlightWords = [],
  highlightClassName = "",
  linkWords = [],
  linkHrefs = [],
  linkClassNames = [],
}: AnimatedTextGenerateProps) {
  const [visibleTokens, setVisibleTokens] = useState(0);

  const tokens = useMemo(() => text.match(/\s+|[^\s]+/g) ?? [], [text]);

  useEffect(() => {
    setVisibleTokens(0);

    const baseDelay = Math.max(18, 70 / Math.max(speed, 0.25));
    const timeoutId = window.setInterval(() => {
      setVisibleTokens((current) => {
        if (current >= tokens.length) {
          window.clearInterval(timeoutId);
          return current;
        }

        return current + 1;
      });
    }, baseDelay);

    return () => {
      window.clearInterval(timeoutId);
    };
  }, [speed, tokens.length, text]);

  return (
    <p
      className={clsx("inline-block text-balance", className)}
      aria-label={text}
    >
      <span className={clsx("inline", textClassName)}>
        {tokens.map((token, index) => {
          if (/^\s+$/.test(token)) {
            return token;
          }

          const normalizedToken = normalizeToken(token);
          const highlightIndex = highlightWords.findIndex(
            (word) => normalizeToken(word) === normalizedToken,
          );
          const linkIndex = linkWords.findIndex(
            (word) => normalizeToken(word) === normalizedToken,
          );

          const isVisible = index < visibleTokens;
          const shouldHighlight = highlightIndex !== -1;
          const shouldLink = linkIndex !== -1 && linkHrefs[linkIndex];
          const tokenClassName = clsx(
            "inline-block whitespace-pre-wrap transition-all duration-500 ease-out",
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-2",
            blurEffect && !isVisible && "blur-sm",
            shouldHighlight && highlightClassName,
            shouldLink &&
              clsx(
                "underline decoration-current underline-offset-4 transition hover:opacity-80",
                linkClassNames[linkIndex],
              ),
          );

          const content = <span className={tokenClassName}>{token}</span>;

          if (shouldLink) {
            return (
              <a
                key={`${token}-${index}`}
                href={linkHrefs[linkIndex]}
                className="inline-block align-baseline"
              >
                {content}
              </a>
            );
          }

          return <span key={`${token}-${index}`}>{content}</span>;
        })}
      </span>
    </p>
  );
}

export default AnimatedTextGenerate;
