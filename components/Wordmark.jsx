/**
 * The "next" brand wordmark.
 *
 * The final letter "t" is custom-built: its crossbar is a green arrow with a
 * slanted tail pointing right (the brand mark). Everything is sized in `em`,
 * so the whole logo scales with the parent's `font-size`, and the letters use
 * `currentColor` so it works on any background.
 */
export default function Wordmark({ className = "", style }) {
  return (
    <span
      className={`wordmark ${className}`}
      style={style}
      role="img"
      aria-label="next"
    >
      <span className="wm-text" aria-hidden="true">
        nex
      </span>
      <span className="wm-t" aria-hidden="true">
        <span className="wm-stem" />
        <span className="wm-arrow">
          <span className="wm-shaft" />
          <span className="wm-head" />
        </span>
      </span>
    </span>
  );
}
