export function manageFriends(state = { friends : []}, action){
  switch (action.type){
    case 'ADD_FRIEND' : return { friends : [...state.friends, action.friend] };
    case 'REMOVE_FRIEND' : return { friends : addAllExcept(action.id, state.friends) };
    default : return { friends : state.friends };
  }
}

function addAllExcept(id, friends){
  const listOfFriends = [];
  for (const friend of friends){
    if (friend.id !== id){ listOfFriends.push(friend) }
  }
  return listOfFriends;
}