"use client";
import { Suspense } from "react";
import ChatComponent from "@/components/chat";
import styles from "./page.module.css";

export default function Home() {
  const updateArray = () => {
    // array = [...array, array[0]];
    const array = [0, -13, 7, 0, 0, 4, 8, 9, 0];
    [...array].forEach((item, index) => {
      if (item === 0) {
        //  array.pop(item);
        array[index] = array[index + 1];
        array[index + 1] = item;
      }
    });

    console.log("array", array);
  };

  const newUpdateArray = () => {
    const array = [0, -13, 7, 0, 0, 4, 8, 9, 0];
    let insertPos = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        array[insertPos++] = array[i];
      }
    }

    while (insertPos < array.length) {
      array[insertPos++] = 0;
    }

    console.log("array", array);
  };
  return (
    <div className={styles.container}>
      <button onClick={newUpdateArray} className={styles.button}>
        updateArray
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <ChatComponent />
      </Suspense>
    </div>
  );
}
