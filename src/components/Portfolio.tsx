
import * as data from '../../data.json'
import PortfolioItem from './PortfolioItem'
import * as React from 'react'

export const Portfolio =(props:any)=>{
    const selectedShow = (data as any).shows.find((show:any) =>props.match.params.id===show.imdbID)
    return (<PortfolioItem show = {selectedShow} {...props} />)
}

export default Portfolio;