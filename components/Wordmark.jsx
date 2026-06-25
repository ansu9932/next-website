/**
 * The "next." brand wordmark — lowercase "next" + a hyper-green dot.
 * Inherits font-size/color from its parent via the `.wordmark` class.
 */
export default function Wordmark({ className = "", style }) {
  return (
    <span className={`wordmark ${className}`} style={style}>
      next
      <span className="dot-g" aria-hidden="true" />
    </span>
  );
}
