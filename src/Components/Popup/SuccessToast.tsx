import { Alert } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../Redux/Store';

const SuccessToast = () => {
    const isShowSuccess = useAppSelector(state=>state.cart.isShowSuccess)
    let successToastClassName = isShowSuccess ? "" : " hidden";
  return (
    <div className={`${successToastClassName} fixed right-0 top-1 z-50`}>
        <Alert variant="outlined" severity="success">
          Your item is successfully added
        </Alert>
      </div>
  )
}

export default SuccessToast