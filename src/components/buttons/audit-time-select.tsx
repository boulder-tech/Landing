'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectLabel, SelectGroup } from "../ui/select";
import React, { Dispatch, SetStateAction, useState } from 'react'

const SelectOption = ({value, children}: {value: string, children: React.ReactNode}) => {
    return (
        <SelectItem value={value} className={`px-2 py-2 cursor-pointer bg-transparent hover:bg-boulder-seperator [&_svg]:hidden}`}>
            <div className='flex gap-3 items-center font-normal'>
                {children}
            </div>
        </SelectItem>
    )
}

const ListedTimes = ["Last update","Last 24h", "Last 7d", "Last 30d", "Last 90d", "Last 180d", "Last 365d"];

const AuditTimeSelect = () => {

    const [time, setTime] = useState<string>("Last update")

    return (
        <Select onValueChange={(v) => setTime(v as string)}>
            <SelectTrigger className='font-inter font-normal text-boulder-text-secondary rounded-[8px] text-base w-fit h-full px-3 py-3 border border-boulder-border bg-transparent hover:bg-background-secondary transition-colors duration-75 flex gap-2 items-center justify-center focus:outline-none selection:outline-none outline-none ring-0 focus:ring-0 focus:ring-transparent focus:border-boulder-border'>
                <h3 className='pb-0'>{time}</h3>
            </SelectTrigger>
            <SelectContent className='bg-background-secondary border-boulder-seperator  text-base md:text-lg font-inter font-medium'>
                <SelectGroup className='text-boulder-text-secondary'>
                    <SelectLabel className='p-1 pb-2 m-0 font-normal text-sm'>Select a network</SelectLabel>
                    <SelectOption value={"arbitrum"}>
                        <p>Arbitrum One</p>
                    </SelectOption>
                    {ListedTimes.map((time, index) => (
                        <SelectOption key={index} value="{time}">
                            <p>{time[index]}</p>
                        </SelectOption>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default AuditTimeSelect;
