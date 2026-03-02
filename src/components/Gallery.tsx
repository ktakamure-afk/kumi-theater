import styles from "./Gallery.module.css";

const galleryItems = [
  { label: "稽古風景 1", color: "#2a1f3d" },
  { label: "稽古風景 2", color: "#1f2a3d" },
  { label: "稽古風景 3", color: "#3d2a1f" },
  { label: "過去公演 1", color: "#1f3d2a" },
  { label: "過去公演 2", color: "#3d1f2a" },
  { label: "過去公演 3", color: "#2a3d1f" },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <h2 className="sectionTitle">ギャラリー</h2>
        <p className="sectionSubtitle">Gallery</p>
        <div className={styles.grid}>
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={styles.item}
              style={{ backgroundColor: item.color }}
            >
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
