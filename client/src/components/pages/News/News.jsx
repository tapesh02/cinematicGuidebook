import { useState, useEffect } from "react";
import axios from "axios";
import { MdLibraryBooks } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { convertDate } from "../../../helpers/helperFunctions";

const News = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const url = `${process.env.REACT_APP_NEWS_URL}/svc/topstories/v2/movies.json?api-key=${process.env.REACT_APP_NEWS_API_KEY}`;
      const response = await axios.get(url);
      if (response?.status === 200) return setNews(response.data.results);
    };
    getNews();
  }, []);
  const RenderNews = () => {
    return news?.map((singleNews, index) => (
      <div key={index} className="news-card-wrapper">
        <img alt="Entertainment News" src={singleNews.multimedia[1].url} />
        <div className="news-card-content-wrapper">
          <h3>{singleNews.title}</h3>
          <p>{singleNews.abstract}</p>
        </div>
        <div className="news-card-content-two-wrapper">
          <p>
            <span>
              <SlCalender />
            </span>{" "}
            {convertDate(singleNews.published_date)}
          </p>
          <p>
            <span>
              <MdLibraryBooks />
            </span>{" "}
            {singleNews.byline}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="news-card">
      <RenderNews />
    </div>
  );
};

export default News;
