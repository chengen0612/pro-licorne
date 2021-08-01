import React, { useState, useEffect, useRef } from 'react'
// import { FiSearch, FiMapPin, FiX } from 'react-icons/fi'
import GoogleMapReact from 'google-map-react'
// import CourseClassRoom from '../../Course/CourseList/CourseClassRoom'
import { imgPath } from '../../../config/index'

const MarkerIcon = () => {
  return (
    <>
      <div
        className="modal__marker-box"
        style={{ transform: 'translate(-50%, -100%)' }}
      >
        <img
          src={imgPath + '/images/course/map-markersolid.svg'}
          alt=""
          className="modal__marker"
        />
      </div>
      {/* <FiMapPin className="modal__marker" /> */}
    </>
  )
}

export default function MyMap(props) {
  //設定選擇店鋪
  // const { setSelectForm, placeLatLng } = props
  const { placeLatLng } = props

  //const [select, setSelect] = useState('');

  // json抓出經緯度
  const [jsonArrayLatLng, setJsonArrayLatLng] = useState([])

  // 經緯度預設值
  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);
  const [defaultLatLng, setDefaultLatLng] = useState({ lat: 0, lng: 0 })

  //console.log(JSON.stringify(defaultLatLng));

  //預設顯示資訊
  // const [shops, setShops] = useState([
  //   {
  //     course_place_name: '高雄民益店',
  //     course_place_address: '高雄市小港區民益路13號',
  //     course_place_phone: '07-8012255',
  //     course_place_lat: '22.5662669501168',
  //     course_place_lng: '120.34782427919656',
  //   },
  // ])

  //搜尋功能
  const queryString = useRef(null)

  // const queryHandler = () => {
  //   const keyword = queryString.current.value
  //   if (keyword.length === 0) return
  //   const results = placeLatLng.filter((item) => {
  //     return item.course_place_address.includes(keyword)
  //   })
  //   setShops(results)
  // }

  // 顯示鄰近店鋪
  // const [show, setShow] = useState(false)
  // const clickShow = (e) => {
  //   setShow(true)
  //   const results = placeLatLng.filter((item) => {
  //     return item.course_place_address
  //   })
  //   setShops(results)
  // }

  //自動定位目前位置
  const defaultProps = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 16,
  }

  // 抓取經緯度
  useEffect(() => {
    if (navigator.geolocation) {
      // 執行要權限的function
      function error() {
        alert('無法取得你的位置')
      }

      // 使用者允許抓目前位置，回傳經緯度
      function success(position) {
        // setLat(position.coords.latitude);
        // setLng(position.coords.longitude);
        setDefaultLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      }

      // 跟使用者拿所在位置的權限
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      alert('Sorry, 你的裝置不支援地理位置功能。')
    }

    const latlngList = placeLatLng.map((v, i) => {
      return {
        course_place_lat: v.course_place_lat,
        course_place_lng: v.course_place_lng,
      }
    })
    setJsonArrayLatLng(latlngList)
  }, [])
  // 計算經緯度距離
  // function calcCrow(lat1, lon1, lat2, lon2) {
  //   var R = 6371 // km
  //   var dLat = toRad(lat2 - lat1)
  //   var dLon = toRad(lon2 - lon1)
  //   var lat1 = toRad(lat1)
  //   var lat2 = toRad(lat2)

  //   var a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  //   var d = R * c
  //   return d
  // }

  // Converts numeric degrees to radians
  // function toRad(Value) {
  //   return (Value * Math.PI) / 180
  // }
  return (
    <>
      <div className="home__map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          center={defaultLatLng}
          defaultZoom={defaultProps.zoom}
        >
          <MarkerIcon lat={defaultLatLng.lat} lng={defaultLatLng.lng} />
          {/* {show &&
            jsonArrayLatLng.map((value, index) => {
              return (
                <MarkerIcon
                  key={index}
                  lat={value.course_place_lat}
                  lng={value.course_place_lng}
                />
              )
            })} */}
        </GoogleMapReact>
      </div>
    </>
  )
}
