import React from 'react'

type Props = {
    setInput:Function
}

export const Searchbar: React.FC<Props> = ({ setInput }: Props) => {
    return(
        <div>
            <input onChange={(text) => setInput(text.target.value)} type="search"/>
        </div>
    )
}