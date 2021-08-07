import React, { useState } from 'react'
import './style.css'
// import { imgPath } from '../../config'
import { FiX } from 'react-icons/fi'
import Start from './components/Start'
import Questions from './components/Questions'
import Results from './components/Results'

function Sidebar({ sidebarIsOpen, closeSidebar }) {
  const [hideOne, setHideOne] = useState(true)
  const [showStart, setShowStart] = useState(false)

  return (
    <>
      <div
        className={
          sidebarIsOpen
            ? 'quiz__backdrop'
            : 'quiz__backdrop quiz__backdrop-close'
        }
        onClick={() => {
          closeSidebar()
          document.body.style.overflow = 'visible'
        }}
      ></div>
      <div
        className={
          sidebarIsOpen ? 'quiz__sidebar' : 'quiz__sidebar quiz__sidebar-close'
        }
      >
        <div className="quiz__close">
          <FiX
            className="feather-m"
            role="button"
            onClick={() => {
              closeSidebar()
              document.body.style.overflow = 'visible'
            }}
          />
        </div>
        <Start hideOne={hideOne} setHideOne={setHideOne} />
        {!hideOne && (
          <Questions
            showStart={showStart}
            setShowStart={setShowStart}
            hideOne={hideOne}
            setHideOne={setHideOne}
          />
        )}
        {/* <Results /> */}
      </div>
    </>
  )
}
export default Sidebar
