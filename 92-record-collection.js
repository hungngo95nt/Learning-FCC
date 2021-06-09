// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  const isHasProp = (prop) =>{
    return records[id].hasOwnProperty(prop);
  }
  const deleteProp = (prop)=>{
      delete records[id][prop];
  };
    switch(prop){
    case "tracks":{
      if(isHasProp(prop)) records[id]["tracks"].push(value);
      else  records[id]["tracks"] = [value];
      if(value =='') deleteProp(prop);
    }
      break;
    case "artist":{
      if(!isHasProp(prop)) records[id]["artist"] = value;
      if(value =='') deleteProp(prop);
    }
      break;
    case "albumTitle": {
      if(!isHasProp(prop)) records[id]["albumTitle"] = value;
    }
      break;
    }
  return records;
}
updateRecords(recordCollection, 2548, 'tracks', '');