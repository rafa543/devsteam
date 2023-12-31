import Image from "next/image";
import styles from "./gamecard.module.css";

import Button from "@/components/forms/button/button";

export default function GameCard() {
  return (
    <div className={styles.gamecard}>
      <Image
        className={styles.image}
        src="/products/dota-2.jpg"
        width={300}
        height={145}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>Counter strike: Global offensive</h3>
        <p className={styles.category}>Ação, estratégia, multijogador.</p>
        <div className={styles.pricing}>
          <h2 className={styles.price}>R$99,99</h2>
          <Button>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  );
}
