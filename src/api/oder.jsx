import axios from "axios"

export const GetOders = async()=>{
    return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/orders")
}

export const FilterByDate = async (startDate, endDate) =>{
    return await axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/orders/filterDate?startDate=${startDate}&endDate=${endDate}`);
}

export const Dailytotal = async () =>{
    return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/orders/daily-revenue")
}


export const FilterDaylyTotal = async(startDate,endDate) =>{
    return await axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/orders/daily?startDate=${startDate}&endDate=${endDate}`)
}

export const DatabyDate =async (startDate,endDate) =>{
   return await axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/oders/bytotalDate?startDate=${startDate}&endDate=${endDate}`)
}

export const getOrderCancel = async() =>{
    return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/cancelOrder")
}

export const DatabyCancelDate =async (startDate,endDate) =>{
    return await axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/cancelOrder/filterOrder?startDate=${startDate}&endDate=${endDate}`)
 }

export const AcpectCancelOrder = async(id)=>{
    return await axios.delete(`https://api-ecommerce-pqnh.onrender.com/api/v1/CancelOder/${id}`)
}