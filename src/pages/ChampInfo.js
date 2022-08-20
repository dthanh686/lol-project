import React, { useState, useEffect, useRef } from "react";
import "../styles/ChampionInfo.css";
import { useLocation, useParams } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import { motion } from "framer-motion";
import {
  imagechampapi,
  imageskillapi,
  imagepassiveapi,
} from "../config/riotapi";
import { Fade } from "react-slideshow-image";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function ChampInfo() {
  const location = useLocation();
  const objectchamp = location.state.objectchamp;
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
  return (
    <div className="app__container">
      <div className="info__container">
        <div className="info__image">
          <img src={`${imagechampapi}/${objectchamp.id}_0.jpg`} />
        </div>
        <div className="info__detail">
          <div className="title">{`${objectchamp.name}-${objectchamp.title}`}</div>

          <div className="skill__box">
            <div className="skill__item">
              <Tooltip
                key={objectchamp.passive.name}
                placement="top"
                title={
                  <div>
                    <div>{objectchamp.passive.name}</div>
                  </div>
                }
              >
                <div className="passive">
                  <img
                    src={`${imagepassiveapi}/${objectchamp.passive.image.full}`}
                  />

                  <div className="skill__title">Nội tại</div>
                </div>
              </Tooltip>
            </div>
            <Tooltip
              placement="top"
              key={objectchamp.spells[0].name}
              title={
                <div>
                  <div>{objectchamp.spells[0].name}</div>
                </div>
              }
            >
              <div className="skill__item">
                <motion.div
                  className="dismo"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    type: "spring",
                    bounce: 0.65,
                    damping: 25,
                  }}
                >
                  <img
                    src={`${imageskillapi}/${objectchamp.spells[0].image.full}`}
                  />
                </motion.div>

                <div
                  className="skill__title"
                  style={{
                    backgroundImage:
                      "url(" +
                      imageskillapi +
                      "/" +
                      objectchamp.spells[0].image.full +
                      ")",
                    backgroundSize: "cover",
                  }}
                >
                  Q
                </div>
              </div>
            </Tooltip>
            <Tooltip
              placement="top"
              key={objectchamp.spells[1].name}
              title={
                <div>
                  <div>{objectchamp.spells[1].name}</div>
                </div>
              }
            >
              <div className="skill__item">
                <motion.div
                  className="dismo"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    type: "spring",
                    bounce: 0.65,
                    damping: 25,
                  }}
                >
                  <img
                    src={`${imageskillapi}/${objectchamp.spells[1].image.full}`}
                  />
                </motion.div>

                <div
                  className="skill__title"
                  style={{
                    backgroundImage:
                      "url(" +
                      imageskillapi +
                      "/" +
                      objectchamp.spells[1].image.full +
                      ")",
                    backgroundSize: "cover",
                  }}
                >
                  W
                </div>
              </div>
            </Tooltip>
            <Tooltip
              placement="top"
              key={objectchamp.spells[2].name}
              title={
                <div>
                  <div>{objectchamp.spells[2].name}</div>
                </div>
              }
            >
              <div className="skill__item">
                <motion.div
                  className="dismo"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    type: "spring",
                    bounce: 0.65,
                    damping: 25,
                  }}
                >
                  <img
                    src={`${imageskillapi}/${objectchamp.spells[2].image.full}`}
                  />
                </motion.div>

                <div
                  className="skill__title"
                  style={{
                    backgroundImage:
                      "url(" +
                      imageskillapi +
                      "/" +
                      objectchamp.spells[2].image.full +
                      ")",
                    backgroundSize: "cover",
                  }}
                >
                  E
                </div>
              </div>
            </Tooltip>
            <Tooltip
              placement="top"
              key={objectchamp.spells[3].name}
              title={
                <div>
                  <div>{objectchamp.spells[3].name}</div>
                </div>
              }
            >
              <div className="skill__item">
                <motion.div
                  className="dismo"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    type: "spring",
                    bounce: 0.65,
                    damping: 25,
                  }}
                >
                  <img
                    src={`${imageskillapi}/${objectchamp.spells[3].image.full}`}
                  />
                </motion.div>

                <div
                  className="skill__title"
                  style={{
                    backgroundImage:
                      "url(" +
                      imageskillapi +
                      "/" +
                      objectchamp.spells[3].image.full +
                      ")",
                    backgroundSize: "cover",
                  }}
                >
                  R
                </div>
              </div>
            </Tooltip>
          </div>
          <div className="lore__box">
            <div className="title">{`Cốt truyện:`}</div>
            <div className="content">{`${objectchamp.lore}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChampInfo;
