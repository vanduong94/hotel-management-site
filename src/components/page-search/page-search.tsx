"use client"

import React, { useState } from 'react'
import Search from '../search'

type Props = {}

function PageSearch(props: Props) {
  const [roomTypeFilter, setRoomTypeFilter] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  return (
  <Search 
    roomTypeFilter={roomTypeFilter} 
    searchQuery={searchQuery}
    setRoomTypeFilter={setRoomTypeFilter}
    setSearchQuery={setSearchQuery}
  />)
}

export default PageSearch