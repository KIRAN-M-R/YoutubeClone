import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/system';
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';

const App = () => 
  (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
    <Navbar/>
    <Routes>
        <Route path="/YoutubeClone" exact element={<Feed/>}/>
        <Route path="/YoutubeClone/video/:id" element={<VideoDetail/>}/>
        <Route path="/YoutubeClone/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/YoutubeClone/search/:searchTerm" element={<SearchFeed/>}/>
    </Routes>
    </Box>
    </BrowserRouter>

    
  )


export default App