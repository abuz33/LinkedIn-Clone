import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Welcome to LinkedIn", "Top news - 9090 readers")}
      {newsArticle("Coronavirus: Nederlands Update", "Top news - 886 readers")}
      {newsArticle("Tesla Hits new highs", "Top news - 123 readers")}
      {newsArticle(
        "SpaceX has prepared another falcon rocket ",
        "Top news - 34545 readers"
      )}
      {newsArticle("Bitcoin breaks $22K", "Top news - 33 readers")}
      {newsArticle("Is Redux too good?", "Top news - 90 readers")}
      {newsArticle("Another app is on its way", "Top news - 950 readers")}
    </div>
  );
}

export default Widgets;
