import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import appFetch from "../utils/AppFetch";
import * as O from "../constants/fetchOptions";
import * as E from "../constants/endpoints";
import VideoItem from "../components/VideoItem";

function VideoSearchResult() {
  const [videoData, setVideoData] = useState<any>([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    async function getData() {
      const response = await appFetch(
        `${E.rapidApi}/${E.search}?query=${params.get("query")}`,
        O.searchOptions
      );
      setVideoData(response.contents);
      console.log(videoData);
    }
    getData();
  }, [params]);

  return (
    <Container>
      <Content>
        {videoData.length > 0 &&
          videoData.map((videoData: any) => (
            <VideoItem videoData={videoData.video} />
          ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export default VideoSearchResult;
