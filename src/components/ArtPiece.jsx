import styles from "./ArtPiece.module.css";

const placeholderSVGs = [
  <svg key={0} viewBox="0 0 260 320" xmlns="http://www.w3.org/2000/svg">
    <rect width="260" height="320" fill="#131c28" />
    <circle cx="70" cy="110" r="100" fill="#5b9fd4" opacity="0.25" />
    <circle cx="200" cy="230" r="80" fill="#a8c4e0" opacity="0.15" />
    <rect
      x="50"
      y="50"
      width="160"
      height="220"
      fill="none"
      stroke="#a8c4e0"
      strokeWidth="0.4"
      opacity="0.2"
    />
    <circle
      cx="130"
      cy="160"
      r="40"
      fill="none"
      stroke="#7aaed4"
      strokeWidth="0.5"
      opacity="0.4"
    />
  </svg>,
  <svg key={1} viewBox="0 0 260 320" xmlns="http://www.w3.org/2000/svg">
    <rect width="260" height="320" fill="#0d1520" />
    <line
      x1="0"
      y1="0"
      x2="260"
      y2="320"
      stroke="#5b9fd4"
      strokeWidth="0.4"
      opacity="0.3"
    />
    <line
      x1="260"
      y1="0"
      x2="0"
      y2="320"
      stroke="#5b9fd4"
      strokeWidth="0.4"
      opacity="0.3"
    />
    <circle
      cx="130"
      cy="160"
      r="90"
      fill="none"
      stroke="#a8c4e0"
      strokeWidth="0.4"
      opacity="0.15"
    />
    <circle
      cx="130"
      cy="160"
      r="60"
      fill="none"
      stroke="#a8c4e0"
      strokeWidth="0.4"
      opacity="0.15"
    />
    <circle cx="130" cy="160" r="30" fill="#1c2e42" opacity="0.9" />
    <circle cx="130" cy="160" r="8" fill="#7aaed4" opacity="0.8" />
  </svg>,
  <svg key={2} viewBox="0 0 260 320" xmlns="http://www.w3.org/2000/svg">
    <rect width="260" height="320" fill="#0e1825" />
    <rect x="0" y="180" width="260" height="140" fill="#1a3050" opacity="0.8" />
    <ellipse cx="130" cy="180" rx="80" ry="28" fill="#5b9fd4" opacity="0.3" />
    <ellipse cx="130" cy="178" rx="30" ry="18" fill="#a8d4f0" opacity="0.5" />
    <rect x="116" y="120" width="28" height="200" fill="#1c2e42" />
    <rect x="100" y="120" width="60" height="14" fill="#253d55" />
  </svg>,
  <svg key={3} viewBox="0 0 260 320" xmlns="http://www.w3.org/2000/svg">
    <rect width="260" height="320" fill="#060e1a" />
    <rect
      x="16"
      y="16"
      width="228"
      height="288"
      fill="none"
      stroke="#3a7fb5"
      strokeWidth="0.3"
      opacity="0.4"
    />
    <rect
      x="30"
      y="30"
      width="200"
      height="260"
      fill="none"
      stroke="#3a7fb5"
      strokeWidth="0.3"
      opacity="0.3"
    />
    <rect
      x="44"
      y="44"
      width="172"
      height="232"
      fill="none"
      stroke="#3a7fb5"
      strokeWidth="0.3"
      opacity="0.2"
    />
    <circle cx="130" cy="160" r="44" fill="#111e2e" />
    <circle cx="130" cy="160" r="3" fill="#7aaed4" />
    <line
      x1="130"
      y1="116"
      x2="130"
      y2="50"
      stroke="#5b9fd4"
      strokeWidth="0.4"
      opacity="0.5"
    />
    <line
      x1="174"
      y1="160"
      x2="240"
      y2="160"
      stroke="#5b9fd4"
      strokeWidth="0.4"
      opacity="0.5"
    />
  </svg>,
];

export default function ArtPiece({ title, medium, year, placeholder, index }) {
  return (
    <div className={styles.piece}>
      <div className={styles.canvas}>
        {placeholder ? (
          <svg viewBox="0 0 260 320" xmlns="http://www.w3.org/2000/svg">
            <rect width="260" height="320" fill="#0d1520" />
            <rect
              x="1"
              y="1"
              width="258"
              height="318"
              fill="none"
              stroke="#3a7fb5"
              strokeWidth="0.5"
              strokeDasharray="4,4"
              opacity="0.3"
            />
            <text
              x="130"
              y="155"
              textAnchor="middle"
              fontFamily="Georgia,serif"
              fontStyle="italic"
              fontSize="16"
              fill="#3a7fb5"
              opacity="0.35"
            >
              + Add Work
            </text>
            <text
              x="130"
              y="175"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="9"
              fill="#3a7fb5"
              opacity="0.2"
              letterSpacing="2"
            >
              REPLACE WITH IMAGE
            </text>
          </svg>
        ) : (
          placeholderSVGs[index % placeholderSVGs.length]
        )}
      </div>
      <p className={`${styles.title} ${placeholder ? styles.titleMuted : ""}`}>
        {title}
      </p>
      <p className={styles.medium}>
        {medium}
        {year ? ` — ${year}` : ""}
      </p>
    </div>
  );
}
