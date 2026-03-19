import { useMaskStore, Mask } from "../store/mask";
import { DEFAULT_TOPIC } from "../store/chat";
import { Path } from "../constant";
import styles from "./mask.module.scss";
import { Avatar } from "./emoji";

function MaskCard({ mask }: { mask: Mask }) {
  const handleClick = () => {
    window.location.hash = `${Path.NewChat}?mask=${mask.id}`;
  };

  return (
    <div className={styles["mask-item"]} onClick={handleClick}>
      <div className={styles["mask-header"]}>
        <div className={styles["mask-icon"]}>
          <Avatar avatar={mask.avatar} />
        </div>
        <div className={styles["mask-title"]}>
          <div className={styles["mask-name"]}>{mask.name}</div>
          <div className={styles["mask-info"]}>{mask.desc}</div>
        </div>
      </div>
    </div>
  );
}

export function MaskGallery() {
  const maskStore = useMaskStore();
  const masks = maskStore
    .getAll()
    .filter((mask) => mask.name !== DEFAULT_TOPIC);

  return (
    <div className={styles["mask-page"]}>
      <div className={styles["mask-gallery-header"]}>
        <img
          className={styles["mask-gallery-logo"]}
          src="https://www.china-gene.com/upload/images/2024/07/25/4545589ae457405e900ca6b2b9f375bf.png"
          alt="logo"
        />
        <span className={styles["mask-gallery-title"]}>九源基因AI助手中心</span>
      </div>
      <div className={styles["mask-page-body"]}>
        {masks.map((mask) => (
          <MaskCard key={mask.id} mask={mask} />
        ))}
      </div>
    </div>
  );
}
