'use client'
import { DateTimePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem, TextField } from "@mui/material"
import { useState } from 'react'
// import { useSearchParams } from "next/navigation"
import { Dayjs } from "dayjs"

export default function DateReserve ({onRestaurantChange,onAmountChange,onReserDateChange} : {onRestaurantChange:Function, onAmountChange:Function ,onReserDateChange:Function}) {
    // const urlParams = useSearchParams()
    // const hos = urlParams.get('hospital')
    const [restaurant,setRestaurant] = useState<string>('')
    const [amount,setAmount] = useState<number>(0)
    const [reserDate,setReserDate] = useState<Dayjs|null>(null)

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 w-fit px-10 py-5 flex flex-roe justify-center">
            <table className='table-auto border-separate border-spacing-2'>
                    <tbody>
                        <tr><td>
            
            <Select variant="standard" name="restaurant" id="restaurant" value={restaurant} 
            onChange={(e) => {setRestaurant(e.target.value); onRestaurantChange(e.target.value)}}
            className="h-[3em] w-[200px]">
                <MenuItem value="65e49c30b99b32ad41836383">Jork Samyan</MenuItem>
                <MenuItem value="65e59539f2d81b451e6f7f1a">Namba Shabu</MenuItem>
                <MenuItem value="65e59bd7165845d7bc72f51f">Namba Samyan</MenuItem>
            </Select>
            </td>
            <td>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker className="bg-white"
                value={reserDate}
                onChange={(value) => {setReserDate(value); onReserDateChange(value)}}
                />
            </LocalizationProvider>
            </td>
            </tr>
            <tr><td>
            <TextField variant="standard" label="amount" name="amount" value={amount}
            onChange={(e) => {setAmount(Number(e.target.value)); onAmountChange(e.target.value)}}
            />
            </td></tr>
            </tbody></table>
        </div>
    )
}