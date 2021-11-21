import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";

const demoImg =
  "http://static1.squarespace.com/static/5730994c746fb95e170be09a/t/5daf41beac36a72a05de6d6f/1571766775892/sports+news.jpg?format=1500w";

const arrNews = [
  {
    source: "Independent",
    title: "Man City vs Everton predicted line-ups: Team news ahead of today",
    url: "https://www.independent.co.uk/sport/football/man-city-everton-team-news-predicted-lineup-b1960925.html",
    img: "https://static.independent.co.uk/2021/11/19/15/GettyImages-1236073099.jpg?width=640&auto=webp&quality=75",
  },
  {
    source: "Independent",
    title: "Man City vs Everton prediction: How will fixture play out today?",
    url: "https://www.independent.co.uk/sport/football/man-city-everton-prediction-form-odds-b1960960.html",
    img: "https://static.independent.co.uk/2021/11/19/16/GettyImages-1236385052.jpg?width=640&auto=webp&quality=75",
  },
  {
    source: "Independent",
    title:
      "Man City vs Everton live stream: How to watch online and on TV today",
    url: "https://www.independent.co.uk/sport/football/man-city-everton-live-stream-watch-online-b1960827.html",
    img: "https://static.independent.co.uk/2021/11/19/14/GettyImages-1235644720.jpg?width=640&auto=webp&quality=75",
  },
  {
    source: "Independent",
    title: "Ole Gunnar Solskjaer news LIVE: Man Utd manager set to be sacked",
    url: "https://www.independent.co.uk/sport/football/solskjaer-news-live-man-utd-b1961565.html",
    img: "https://static.independent.co.uk/2021/11/21/08/PRI211208401.jpg?width=640&auto=webp&quality=75",
  },
  {
    source: "Independent",
    title: "Tuchel praises Chelsea’s ‘wild momentum and freedom’ in attack",
    url: "https://www.independent.co.uk/sport/football/thomas-tuchel-brendan-rodgers-londoners-leicester-cesar-azpilicueta-b1961575.html",
    img: "https://static.independent.co.uk/2021/11/21/09/d148f7e29fe938520fb74bcf127f5b14Y29udGVudHNlYXJjaGFwaSwxNjM3NTM2NzQy-2-1.63839504?width=640&auto=webp&quality=75",
  },
  {
    source: "Independent",
    title: "Saint-Maximin backs Howe to haul Newcastle clear of trouble",
    url: "https://www.independent.co.uk/sport/football/allan-saintmaximin-eddie-howe-newcastle-premier-league-ivan-toney-b1961574.html",
    img: "https://static.independent.co.uk/2021/11/21/09/PRI211200666.jpg?width=640&auto=webp&quality=75",
  },
  {
    source: "Independent",
    title: "The favourites to become next Manchester United manager",
    url: "https://www.independent.co.uk/sport/football/man-utd-next-manager-odds-b1961524.html",
    img: "https://static.independent.co.uk/2021/11/21/03/newFile.jpg?width=640&auto=webp&quality=75",
  },
  {
    source: "Independent",
    title: "Solskjaer on brink of Manchester United exit",
    url: "https://www.independent.co.uk/sport/football/manchester-united-ole-gunnar-solskjaer-fletcher-b1961506.html",
    img: "https://static.independent.co.uk/2021/11/20/19/45ae8af9f19bb48c9e96d8b4201d606aY29udGVudHNlYXJjaGFwaSwxNjM3NTIwNDA2-2.63844110.jpg?width=640&auto=webp&quality=75",
  },
];

const News = () => {
  const [getNews, setgetNews] = useState([]);
  useEffect(() => {
    // var options = {
    //   method: "GET",
    //   url: "https://premier-league-news.p.rapidapi.com/news",
    //   headers: {
    //     "x-rapidapi-host": "premier-league-news.p.rapidapi.com",
    //     "x-rapidapi-key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
    //   },
    // };
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     const apiGetter = response.data.slice(0, 8);
    //     console.log(apiGetter);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, []);
  return (
    <>
      {/* News Title */}
      <Grid container mt={2}>
        <Grid item xs={6}>
          <Typography variant="h5">News</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="text">View all</Button>
        </Grid>
      </Grid>
      {/* News items */}
      <Grid container spacing={1} mt={1}>
        {arrNews.map((news, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
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
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default News;
