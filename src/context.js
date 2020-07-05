import React, { Component } from "react";
import { placeInfo, reviews, detailInfo, news } from "./data";

const InfoContext = React.createContext();

class InfoProvider extends Component {
  state = {
    placeInfo,
    reviews,
    detailInfo,
    news,
  };

  getId = (id) => {
    const item = this.state.placeInfo.find((item) => item.id === id);
    return item;
  };

  handleDetail = (id) => {
    const item = this.getId(id);
    this.setState(() => {
      return {
        detailInfo: item,
      };
    });
  };
  render() {
    return (
      <InfoContext.Provider
        value={{
          info: this.state.placeInfo,
          reviews: this.state.reviews,
          detailInfo: this.state.detailInfo,
          news: this.state.news,
          handleDetail: this.handleDetail,
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
