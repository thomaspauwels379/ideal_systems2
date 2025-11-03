import React from 'react'

type Props = {
    setInput:Function
    placeholder:string
}

export const Searchbar: React.FC<Props> = ({ setInput, placeholder }: Props) => {
    return(
        <div>
            <input placeholder={placeholder} onChange={(text) => setInput(text.target.value)} type="search"/>
        </div>
    )
}