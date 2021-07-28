import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'

function AddressEditModal(props) {
  const {
    memberName,
    memberPhone,
    memberAddress,
    setMemberName,
    setMemberPhone,
    setMemberAddress,
  } = props

  const initialMemberData = {
    memberName: memberName,
    memberPhone: memberPhone,
    memberAddress: memberAddress,
  }

  const [memberData, updateMemberData] = useState(initialMemberData)

  const updateMemberName = (e) => {
    updateMemberData({
      ...memberData,
      [e.target.name]: e.target.value.trim(),
    })
    // console.log('current memberName', Object.values(memberData)[0])
  }

  const updateMemberPhone = (e) => {
    updateMemberData({
      ...memberData,
      [e.target.name]: e.target.value.trim(),
    })
    // console.log('current memberPhone', Object.values(data)[1])
  }

  const updateMemberAddress = (e) => {
    updateMemberData({
      ...memberData,
      [e.target.name]: e.target.value.trim(),
    })
    // console.log('current memberAddress', Object.values(memberData)[2])
  }

  const [fields, setFields] = useState({
    recipientName: memberName,
    recipientPhone: memberPhone,
    recipientAddress: memberAddress,
  })

  console.log('recipient name', fields.recipientName)
  console.log('recipient phone', fields.recipientPhone)
  console.log('recipient address', fields.recipientAddress)

  // 處理每個欄位的變動
  const handleFieldChange = (e) => {
    // 更新輸入欄位的變動
    // 用新輸入的屬性值和原物件作合併
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }

    setFields(updatedFields)
    console.log('what is this', updatedFields)
  }

  // const [recipientName, setRecipientName] = useState(memberName)
  // const [recipientPhone, setRecipientPhone] = useState(memberPhone)
  // const [recipientAddress, setRecipientAddress] = useState(memberAddress)

  // const updateRecipientName = (e) => {
  //   // setRecipientName()
  //   updateData({
  //     ...data,

  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim(),
  //   })
  // }

  // const updateRecipientPhone = (e) => {
  //   // setRecipientPhone()
  //   updateData({
  //     ...data,

  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim(),
  //   })
  // }

  // const updateRecipientAddress = (e) => {
  //   // setRecipientAddress()
  //   updateData({
  //     ...data,

  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim(),
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('edited member info', memberData)
    closeHandler()
    setMemberName(Object.values(memberData)[0])
    setMemberPhone(Object.values(memberData)[1])
    setMemberAddress(Object.values(memberData)[2])
    // ... submit to API or something
  }

  function closeHandler() {
    props.onClose()
    document.body.style.overflow = 'visible'
  }

  return (
    <div className="checkout__address-edit-modal d-flex flex-column p-4">
      <FiX
        className="checkout__address-edit-modal-close align-self-end feather-s"
        role="button"
        onClick={closeHandler}
      />
      <span className="checkout__address-edit-modal-title align-self-center">
        編輯收件資訊
      </span>
      <div className="d-flex flex-column p-4">
        <span className="checkout__address-edit-modal-title pb-2">訂購人</span>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          姓名
          <input
            className="checkout__input-text"
            name="memberName"
            type="text"
            value={memberData.memberName}
            onChange={updateMemberName}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          電話
          <input
            className="checkout__input-text"
            name="memberPhone"
            type="text"
            value={memberData.memberPhone}
            onChange={updateMemberPhone}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          地址
          <input
            className="checkout__input-text"
            name="memberAddress"
            type="text"
            value={memberData.memberAddress}
            onChange={updateMemberAddress}
            required
          />
        </label>
        <span className="checkout__address-edit-modal-title">收件人</span>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          姓名
          <input
            className="checkout__input-text"
            name="recipientName"
            type="text"
            value={fields.recipientName}
            state={fields.recipientName}
            setState={handleFieldChange}
            // onChange={updateRecipientName}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          電話
          <input
            className="checkout__input-text"
            name="recipientPhone"
            type="text"
            value={fields.recipientPhone}
            state={fields.recipientPhone}
            setState={handleFieldChange}
            // onChange={updateRecipientPhone}
            required
          />
        </label>
        <label className="checkout__address-edit-modal-label" htmlFor="">
          地址
          <input
            className="checkout__input-text"
            name="recipientAddress"
            type="text"
            value={fields.recipientPhone}
            state={fields.recipientAddress}
            setState={handleFieldChange}
            // onChange={updateRecipientAddress}
            required
          />
        </label>
        <label className="checkbox-label" htmlFor="">
          <input type="checkbox" />
          收件資訊同上
        </label>
        {/* input type="button" 如果跟modal衝到 */}
        <button
          className="checkout__address-edit-modal-btn align-self-end"
          type="submit"
          onClick={handleSubmit}
        >
          更新地址
        </button>
      </div>
    </div>
  )
}

export default AddressEditModal
