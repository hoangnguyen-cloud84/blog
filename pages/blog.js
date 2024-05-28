import Image from 'next/image';
import styles from '../styles/Blog.module.css';

export default function Blog() {
  return (
    <div className={styles.container}>
        <Image src="/devops-roadmap.png" alt="DevOps Roadmap 2024" width={1128} height={3581} />
    </div>
  );
}
