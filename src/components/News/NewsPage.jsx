import React, { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const demoImg =
  "http://static1.squarespace.com/static/5730994c746fb95e170be09a/t/5daf41beac36a72a05de6d6f/1571766775892/sports+news.jpg?format=1500w";

const NewsPage = () => {
  const { newsAll } = useContext(NewsContext);

  return (
    <Card color="primary" sx={{ p: 2, mt: 1 }}>
      <Typography variant="h3" color="primary" sx={{ textAlign: "center" }}>
        Latest News
      </Typography>

      <Grid container spacing={1} mt={1}>
        {newsAll.map((news, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }} key={index}>
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
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default NewsPage;
