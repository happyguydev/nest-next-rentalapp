import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'

import { Information } from '~server/modules/entities/information.entity'

type HomePageProps = {
  infoList: Information[]
}

const Home: NextPage<HomePageProps> = ({ infoList }) => {
  const [cityStr, setCityStr] = useState('')
  const [addressStr, setAddressStr] = useState('')
  const [roomVal, setRoomValue] = useState(1)
  const [priceVal, setPriceValue] = useState(1000)
  const [infoListData, setInfoListData] = useState([])
  const [showAddFields, setShowAddFields] = useState(false)

  const [addCityStr, setAddCityStr] = useState('')
  const [addAddressStr, setAddAddressStr] = useState('')
  const [addRoomVal, setAddRoomValue] = useState(1)
  const [addPriceVal, setAddPriceValue] = useState(1000)
  const [equipmentsList, setEquipmentsList] = useState([])
  const [equipmentValue, setEquipmentValue] = useState([])

  const search = async () => {
    const res = await fetch('http://localhost:3000/dummy/search?rooms=' + roomVal + '&price=' + priceVal + '&city=' + cityStr + '&address=' + addressStr)
    const data = await res.json()
    setInfoListData(data)
  }

  const showAddFieldsItems = async () => {
    const res = await fetch('http://localhost:3000/equipment')
    const equipments = await res.json()
    setEquipmentsList(equipments)
    setShowAddFields(true)
  }

  const addItem = async () => {
    if (addCityStr === '' || addAddressStr === '') {
      alert('Insert City or Address!')
      return
    }

    const res = await fetch('/dummy/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        city: addCityStr,
        address: addAddressStr,
        rooms: addRoomVal,
        price: addPriceVal,
        equipmentIds: equipmentValue
      })
    })
    const list = await res.json()
    if (list.statusCode !== 500) {
      alert('Successfully added!')
      setShowAddFields(false)
      setCityStr('')
      setAddressStr('')
      setRoomValue(1)
      setPriceValue(1000)
      setAddCityStr('')
      setAddAddressStr('')
      setAddRoomValue(1)
      setAddPriceValue(1000)
      search()
    } else {
      alert('Error!')
    }
  }

  const cancelAddItem = () => {
    setAddCityStr('')
    setAddAddressStr('')
    setShowAddFields(false)
  }

  const removeItem = async (id: number) => {
    if (!confirm('Do you want to delete?')) return
    const res = await fetch('http://localhost:3000/dummy/remove/' + id, {
      method: 'DELETE'
    })
    const list = await res.json()
    if (list) {
      alert('Successfully Deleted!')
      setShowAddFields(false)
      setCityStr('')
      setAddressStr('')
      setRoomValue(1)
      setPriceValue(1000)
      search()
    } else {
      alert('Error!')
    }
  }

  const onChangeRoomValue = async (value: number, addFlag = false) => {
    if (addFlag) {
      setAddRoomValue(value)
      return
    }
    setRoomValue(value)
  }

  const onChangePriceValue = (value: number, addFlag = false) => {
    if (addFlag) {
      setAddPriceValue(value)
      return
    }
    setPriceValue(value)
  }

  const onChangeCityText = (str: string, addFlag = false) => {
    if (addFlag) {
      setAddCityStr(str)
      return
    }
    setCityStr(str)
  }

  const onChangeAddressText = (str: string, addFlag = false) => {
    if (addFlag) {
      setAddAddressStr(str)
      return
    }
    setAddressStr(str)
  }

  const onChangeEquipment = (data: HTMLCollectionOf<HTMLOptionElement>) => {
    setEquipmentValue(Array.from(data, item => Number(item.value)))
  }

  useEffect(() => {
    search()
  }, [infoList, cityStr, addressStr, roomVal, priceVal])

  return (
    <div className="list">
      {!showAddFields ? (
        <>
          <div className="list_header">
            <input onChange={e => onChangeCityText(e.target.value)} value={cityStr} placeholder="Search City" />
            <input onChange={e => onChangeAddressText(e.target.value)} value={addressStr} placeholder="Search Address" />
          </div>
          <div className="list_header">
            <div>
              <p>Rooms: {roomVal}</p>
              <input className="list_slider" type="range" min="1" max="10" step="1" value={roomVal} onChange={e => onChangeRoomValue(Number(e.target.value))} />
            </div>
            <div>
              <p>Price: {priceVal}</p>
              <input
                className="list_slider"
                type="range"
                min="1000"
                max="10000"
                step="100"
                value={priceVal}
                onChange={e => onChangePriceValue(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="list_action">
            <a href="#" onClick={() => showAddFieldsItems()}>
              Add apartment
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="list_header">
            <input onChange={e => onChangeCityText(e.target.value, true)} value={addCityStr} placeholder="Add City" />
            <input onChange={e => onChangeAddressText(e.target.value, true)} value={addAddressStr} placeholder="Add Address" />
          </div>
          <div className="list_header">
            <div>
              <p>Rooms: {addRoomVal}</p>
              <input
                className="list_slider"
                type="range"
                min="1"
                max="10"
                step="1"
                value={addRoomVal}
                onChange={e => onChangeRoomValue(Number(e.target.value), true)}
              />
            </div>
            <div>
              <p>Price: {addPriceVal}</p>
              <input
                className="list_slider"
                type="range"
                min="1000"
                max="10000"
                step="100"
                value={addPriceVal}
                onChange={e => onChangePriceValue(Number(e.target.value), true)}
              />
            </div>
          </div>
          <div className="list_equipment">
            <select name="equipment" id="equipment" onChange={e => onChangeEquipment(e.target.selectedOptions)} multiple>
              {equipmentsList.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="list_action">
            <a href="#" onClick={() => addItem()}>
              Ok
            </a>
            <a href="#" onClick={() => cancelAddItem()}>
              Cancel
            </a>
          </div>
        </>
      )}
      <ul className="content">
        {infoListData &&
          infoListData.map((item, index) => {
            return (
              <li key={index}>
                <div className="content_item">
                  <div>
                    <div>
                      <strong>City: </strong>
                      {item.city}
                    </div>
                    <div>
                      <strong>Address: </strong>
                      {item.address}
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong>Rooms: </strong>
                      {item.rooms}
                    </div>
                    <div>
                      <strong>Price: </strong>
                      {item.price}
                    </div>
                  </div>
                  <div>
                    <div>
                      {item.equipments.map((equipment, index) => {
                        return <span key={index}>{equipment.equipmentData.name}</span>
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <a href="#" onClick={() => removeItem(item.id)}>
                    Remove
                  </a>
                </div>
              </li>
            )
          })}
      </ul>
      <p className="list_result">Matches {infoListData && infoListData.length} results</p>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/dummy/all')
  const infoList = await res.json()
  // console.log(infoList)
  return { props: { infoList } }
}

export default Home
