import { useEffect, useState } from "react";
import HitList from "./components/hit-list/HitList";
import { getNews } from "./services/news.services";
import styles from "./App.module.css";
import { useGetNews } from "./useGetNews";

function App() {
    const { hits, page, totalPage, nextPage, prevPage, loading } = useGetNews();

    return (
        <div className={styles.container}>
            <h1>Hello ReactJS + Node.js</h1>
            <button onClick={prevPage}>Prev</button>
            {page} of {totalPage}
            <button onClick={nextPage}>Next</button>
            {loading ? <div>Loading...</div> : <HitList hits={hits} />}
        </div>
    );
}

export default App;
