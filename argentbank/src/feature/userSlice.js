import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connect: false, //de base utilisateur non connecté
};

export const userSlice = createSlice({
  //CreateSlice permet de fusionner le reducer et l'action
  name: "connexion",
  initialState,

  reducers: {
    //L'utilisateur se connecte
    //L'utilisateur se déconnecte
    //L'utilisateur modifie son nom
    setLastNameUser: (state, action) => {
      state.connect = action.payload;
    },
    //L'utilisateur modifie son prénom
  },
});
