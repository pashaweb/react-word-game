import React from 'react'
import useStore from '../store/store';

export default function GameStats(): JSX.Element {
    const totalGames = useStore((state) => state.totalGames);
    const wins = useStore((state) => state.wins);
    const currentGameNumber = useStore((state) => state.currentGameNumber);
    const word_locations = useStore((state) => state.word_locations);
    const word = useStore((state) => state.word);
    const target_language = useStore((state) => state.target_language);
   // const
    return (
        <div className='flex items-center basis-10 w-full'>
            <div className='m-5 ml-0'>
                Total Games: {totalGames}
            </div>
            <div className='m-5'>
                Games Won: {wins}
            </div>
            <div className='m-5'>
               Current Game: {Number(currentGameNumber)+1}
            </div>
            <div className='m-5'>
                Word: {word}
            </div>
            <div className='m-5 m-0'>
            Target language: {target_language}
            </div>
            
        </div>
    )
}