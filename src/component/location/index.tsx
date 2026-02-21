import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            <b>* 지하철</b>
            <br />
            5호선 · 9호선 <b>여의도역</b> 하차, 1번 출구
            <br />
            여의도역 2번 출구 이용 불가
          </div>
          <div />
          <div className="content">
            <b>* 버스</b>
            <br />
            <b>한국경제인협회</b> 정류장 하차  (정류장 번호:19161)
            <br />
            - 간선(파랑): 160, 162, 360, 503, 600, 662
            <br />
            - 지선(초록): 5012, 5615, 5618, 5713, 6628, 6633
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>"여의도웨딩컨벤션" 또는 "여의대로14"</b> 검색
            <br />
            - 주차 요금은 무료입니다.(여기 고쳐야됨!!!!!!!!)
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 본식 건물 주차 만차 시, 옆 건물(전경련) <br /> &emsp;사용 가능합니다.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
