import { Suspense } from 'react';
import ChatComponent from '@/components/chat';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <ChatComponent />
      </Suspense>
    </div>
  );
}
