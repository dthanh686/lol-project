import React, { useState, useEffect } from "react";

import axios from "axios";
import { riotapi, imagechampapi } from "../config/riotapi";
import { motion } from "framer-motion";
import "../App.css";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Champion from "../components/Champion";
function ChampionShow() {
  const [showloading, setshowloading] = useState(true);
  const [championList, setchampionList] = useState([]);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.35,
        delayChildren: 0.75,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const items = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -150 },
  };
  useEffect(() => {
    getAllChamp();
  }, []);
  const getAllChamp = async () => {
    const response = await axios
      .get(`${riotapi}/champion.json`)
      .catch((err) => console.log("Error:", err));
    console.log(">>allchamp", Object.values(response.data.data));
    getChampData(Object.values(response.data.data));
  };
  const getChampData = async (result) => {
    const champArr = [];

    const response = await Promise.all(
      result.map((champItems) => {
        return axios
          .get(`${riotapi}/champion/${champItems.id}.json`)
          .then((result) => {
            champArr.push(result.data.data[champItems.id]);
          });
      })
    );
    console.log(">>champArr", champArr);
    setchampionList(champArr);
    setTimeout(() => {
      setshowloading(false);
    }, 1000);
  };

  return (
    <>
      {showloading && <Loading />}
      {!showloading && (
        <div className="app_container">
          <Header />
          <div className="champion_container">
            <div className="all__champions">
              <motion.ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  listStyleType: "none",
                  paddingInlineStart: "0px",
                  marginBlockStart: "0px",
                  marginBlockEnd: "0px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                initial="hidden"
                animate="visible"
                variants={list}
              >
                {championList.map((champ) => (
                  <motion.li key={champ.id} variants={items}>
                    <Champion
                      id={championList.findIndex((p) => p.id == champ.id) + 1}
                      name={champ.name}
                      image={`${imagechampapi}/${champ.id}_0.jpg`}
                      tags={champ.tags}
                      objectchamp={champ}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChampionShow;
