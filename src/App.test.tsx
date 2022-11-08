/** @jest-environment jsdom */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { IGameData } from './store/store';

const gameData1: IGameData = {
  source_language: "cn",
  word: "natus",
  character_grid: [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ],
  word_locations: {
    "0,0,1,1,2,2":"aei",
  },
  target_language: "javascript"
}



describe('App and fails to load data', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders app', async () => {
    render(<App />);
    await screen.findByText(/ERRORLOADINGGAMES/i);
    //console.log(container.innerHTML);
  });

  it('renders app and data succses', async () => {
    //@ts-ignore
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ 
      text: () => Promise.resolve(JSON.stringify(gameData1) + '\n' ) 
    }));
    const {container} = render(<App />);
    await screen.findByText(/SUCCESSLOADINGGAMES/i);
    //console.log(container.innerHTML);
  });


});



  // expect(linkElement).toBeInTheDocument();
//});
