import { Alert } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../Redux/Store';

const FailToast = () => {
    const isShowFail = useAppSelector(state=>state.cart.isShowFail)
    let failToastClassName = isShowFail ? "" : " hidden";
  return (
    <div className={`${failToastClassName} fixed right-0 top-1 z-50`}>
        <Alert variant="outlined" severity="error">
          Your item is already added
        </Alert>
      </div>
  )
}

export default FailToast