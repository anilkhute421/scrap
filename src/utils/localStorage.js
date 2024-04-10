export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
  };
  
  export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
  };


  //VerticalFarmId  //if required secuirty purpose we use them.

  // export const addVerticalFarmIdToLocalStorage = (id) => {
  //   localStorage.setItem('VerticalFarmId', JSON.stringify(id));
  // };
  
  // export const removeVerticalFarmIdFromLocalStorage = () => {
  //   localStorage.removeItem('VerticalFarmId');
  // };
  
  // export const getVerticalFarmIdFromLocalStorage = () => {
  //   const result = localStorage.getItem('VerticalFarmId');
  //   const verticalFarmId = result ? JSON.parse(result) : null;
  //   return verticalFarmId;
  // };



  export const addUserImageToLocalStorage = (userProfileImg) => {
    localStorage.setItem('userImage', JSON.stringify(userProfileImg));
  };
  
  export const removeUserImageFromLocalStorage = () => {
    localStorage.removeItem('userImage');
  };
  
  export const getUserImageFromLocalStorage = () => {
    const result = localStorage.getItem('userImage');
    const user = result ? JSON.parse(result) : null;
    return user;
  };

  