import Image from "next/image";
import styles from "./page.module.css";
import Feature from "@/components/feature/Feature";

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>
        <span>Reliable, efficient delivery</span>
        <strong>Powered by Technology</strong>
      </h1>
      <p className={styles.desc}>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <div className={styles.wrapper}>
        <Feature
          id="one"
          title="Team Builder"
          desc="Scans our talent network to create the optimal team for your project"
          icon="icon-team-builder.svg"
          color="red"
        />
        <Feature
          id="two"
          title="Supervisor"
          desc="Monitors activity to identify project roadblocks"
          icon="icon-supervisor.svg"
          color="cyan"
        />
        <Feature
          id="three"
          title="Calculator"
          desc="Uses data from past projects to provide better delivery estimates"
          icon="icon-calculator.svg"
          color="blue"
        />
        <Feature
          id="four"
          title="Karma"
          desc="Regularly evaluates our talent to ensure quality"
          icon="icon-karma.svg"
          color="orange"
        />
      </div>
    </main>
  );
}
