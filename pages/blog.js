import Image from 'next/image';
import styles from '../styles/Blog.module.css';

export default function Blog() {
  return (
    <div className={styles.container}>
      <h1>DevOps Roadmap 2024</h1>
      <Image src="/devops-roadmap.png" alt="DevOps Roadmap 2024" width={1024} height={2047} />
    </div>
  );
}
