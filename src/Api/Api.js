import { JwtHandler } from "../jwt-handler/JwtHandler";

export const Api = {
    baseUrl: "http://localhost:3000",

    //Games
    readAllGamesUrl: () => Api.baseUrl + "/games",

    readOneGameUrl: (id)=> Api.baseUrl+"/games/"+id,

    createGameUrl:()=> Api.baseUrl+"/games",

    updateGameUrl: id => Api.baseUrl + "/games/" + id,

    deleteGameUrl: id => Api.baseUrl + "/games/" + id,

   //end point user game list //
   readAllGamesListUrl: (id)=> Api.baseUrl+"/gamelist/"+id,
   
   
    // EndPoint - user
    createuserUrl: () => Api.baseUrl + "/user",
    readAllUsersUrl: ()=> Api.baseUrl+"/users",
    readByIduserUrl: id => Api.baseUrl + "/user/" + id,

    // EndPoint - profiles
    readAllprofilesUrl: () => Api.baseUrl + "/profiles",
    createProfilesurl: () => Api.baseUrl + "/profiles",

    // Genre
    genreUrl: () => Api.baseUrl + "/genres",

    // EndPoint - genrelist
    readAllgenrelistUrl: id => Api.baseUrl + "/genrelist",

    createGeneroUrl: () => Api.baseUrl + "/genrelist",

    // EndPoint - Auth
    authHeader: () => ({
        Authorization: "Bearer " + JwtHandler.getJwt(),
    }),
    
    // EndPoint - Login
    loginUrl: () => Api.baseUrl + "/login",



    //GET
    buildApiGetRequest: (url, auth) =>
        fetch(url, {
        method: "GET",
        headers: auth ? new Headers(Api.authHeader()) : undefined
    }),
    
    // POST
    buildApiPostRequest: (url, body, auth) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // PATCH
    buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
        method: "PATCH",
        headers: new Headers({
            "Content-type": "application/json",
            ...(auth ? Api.authHeader() : {}),

        }),
        body: JSON.stringify(body),
    }),

    // DELETE
    buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
        method: "DELETE",
        headers: auth ? new Headers(Api.authHeader()) : undefined
    }),
};
