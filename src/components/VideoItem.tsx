import { Link } from "react-router-dom";
import styled from "styled-components";

function VideoItem({ videoData }: { videoData: any }) {
  return (
    <CustomLink to={`/stream?id=${videoData?.videoId}`}>
      <Content>
        <VideoThumbnail>
          <img
            src={videoData?.thumbnails[1]?.url || videoData?.thumbnails[0]?.url}
            alt="video-thumbnail"
          />
        </VideoThumbnail>
        <VideoInformation>
          <span>{videoData?.title}</span>
          <span>{videoData?.channelName}</span>
          <span>
            {videoData?.lengthText} | {videoData?.publishedTimeText}
          </span>
          <span>{videoData?.viewCountText}</span>
        </VideoInformation>
      </Content>
    </CustomLink>
  );
}

const CustomLink = styled(Link)`
  text-decoration: none;
  transition: ease-in-out;
  transition-duration: 150ms;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0px 0px 15px 0px #585858;
  }
`;

const Content = styled.div`
  padding: 16px 14px;
  display: flex;
  flex-direction: row;
  /* background-color: orange; */

  &:hover {
    box-shadow: 0 0 1px 1px "#030303f";
  }

  @media (max-width: 760px) {
    width: 100%;
    padding: 10px 8px;
    display: flex;
    flex-direction: column;
    background: orange;
  }
`;

const VideoThumbnail = styled.div`
  & > img {
    width: 300px;
    border-radius: 10px;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

const VideoInformation = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  span {
    :first-child {
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export default VideoItem;
