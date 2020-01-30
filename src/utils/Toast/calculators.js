export const calYardsOfCurtain = (window, door, highLength, normal) => {
  if(highLength && !normal){
    return (window * 8) + (door * 6);
  }else if (normal && !highLength) {
    return (window * 6) + (door * 4);
  }else {
    return 0;
  }
};

export const calHighLenghtTape = (window, door, highLength, normal) => {
  if(highLength && !normal){
    return (window * 8) + (door * 6);
  }else if (normal && !highLength) {
    return 0;
  }else{
    return 0;
  }
};

export const calnormalTape = (window, door, highLength, normal) => {
  if(highLength && !normal){
    return window * 5;
  }else if (normal && !highLength) {
    return (window  * 6) + (window * 5) + (door * 4);
  }else {
    return 0;
  }
};

export const calNoOfRings = (curtain) => (curtain * 6);
export const calYardsOfInner = (window) => (window * 5);
export const calLengthOfPole = (window, door) =>(((window * 7) + (door * 4)) / 19 );
export const calPairsOfCap = (window, door) => ((window * 2) + (door * 1));
export const calSewingHours = (window, door) => ((parseInt(window) + parseInt(door)) * 1.5 );
