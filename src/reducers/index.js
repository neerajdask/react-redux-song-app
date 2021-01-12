import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'No scrubs',
            duration: '4:05',
        },
        {
            title: 'Macrena',
            duration: '2:37',
        },
        {
            title: 'All Star',
            duration: '3:15',
        },
        {
            title: 'I want it that way',
            duration: '2:47',
        },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
