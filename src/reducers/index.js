import {combineReducers} from 'redux'
const songsReducer= () =>{
    return [{title:'No scrbs',duration:'4:05'},{title:'Maacrnena',duration:'2:30'},{title:'All Star',duration:'3:13'},{title:'I want it that way',duration:'3:59'}]
};

const SelectedSongReducer = (selectedSong=null,action) =>{
    if(action.type=='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong
}
export default combineReducers({
    songs:songsReducer,
    selectedSong:SelectedSongReducer
})