'use client'
import styles from "./page.module.css";
import circel from "../../public/R-tron.png";
import image from "../../public/image.png";
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    window.location.href = "/bubinga-connecting";
  };
  // const fetchItem = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://db-affiliate.onrender.com/status?id=2`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setStatus(data?.status);
  //   } catch (error) {
  //     console.error("Error fetching item:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchItem();
  // }, []);
  return (
    <div
      onClick={handleClick}
    >
      <main className={styles.main}>
        <h3 className={styles.text}>
          Bubinga Binary Japan Official Site{" "}
          <span
            style={{ transform: "translate(0px)", display: "inline-block" }}
          >
            <Image src={circel} alt="Logo" width={30} height={30} priority />
          </span>
        </h3>
        <p className={styles.text2}>
          Checking if the site connection is secure
        </p>
        <p className={styles.text3}>
          We needs to review the security of your connection before proceeding
          Bubinga Binary Japan
        </p>
        <div style={{ marginTop: 30 }}>
          <Image src={image} alt="Logo" className={styles.image2} />
        </div>
        <p className={styles.text4}>Why am I seeing this page?</p>
        <p className={styles.text5}>
          Requests from malicious bots can pose as legitimate traffic.
          Occasionally, you may see this page while the site ensures that the
          connection is secure.
        </p>
      </main>
    </div>
  );
}
