import React, { Component } from "react";
import { InfoConsumer } from "./../context";
import NewsCard from "./../components/NewsCard.component";

class News extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          return data.news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ));
        }}
      </InfoConsumer>
    );
  }
}

export default News;
