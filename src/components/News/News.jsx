import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "swiper/css";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
import { NewsContext } from "../../contexts/NewsContext";

const demoImg =
  "http://static1.squarespace.com/static/5730994c746fb95e170be09a/t/5daf41beac36a72a05de6d6f/1571766775892/sports+news.jpg?format=1500w";

const News = () => {
  const { newsAll } = useContext(NewsContext);
  const newsTitle = useMediaQuery("(max-width: 375px)");
  return (
    <>
      {/* News Title */}
      <Grid container mt={2} mb={0}>
        <Grid item xs={6}>
          <Typography variant={newsTitle ? "subtitle1" : "h5"}>News</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="/news">
            <Button variant="text">View all</Button>
          </Link>
        </Grid>
      </Grid>
      {/* News items */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          410: {
            slidesPerView: 1,
          },
          411: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
        <Grid container spacing={1} mt={1}>
          {newsAll.map((news, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SwiperSlide key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea href={news.url} target="_blank">
                    <CardMedia
                      component="img"
                      height="200"
                      image={news?.img || demoImg}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {news.title}
                      </Typography>
                      <Typography variant="overline">
                        Source: {news.source}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            </Grid>
          ))}
        </Grid>
      </Swiper>
    </>
  );
};

export default News;
