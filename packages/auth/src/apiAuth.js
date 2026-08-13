import { apiFetch } from "@tis/api-client/apiFetch";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export async function login({ email, password }) {
  const loginData = {
    username: email,
    password: password,
  };
  const url = `${API_URL}/users/login`;
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!res.ok) {
      throw new Error("Failed getting user");
    }

    // Parsirajte JSON odgovor
    const jsonResponse = await res.json();

    // Proverite da li postoji polje "user"
    if (!jsonResponse.user) {
      throw new Error("Unexpected response structure");
    }

    const token = jsonResponse.access_token;
    const user = jsonResponse.user;
    //console.log("Logged in user:", user);
    // localStorage.setItem("token", token);
    // localStorage.setItem("user", user);

    const expiration = jsonResponse.access_token_expires_at;
    // localStorage.setItem("expiration", expiration);


    // Vrati user data
    return jsonResponse.user;
  } catch (error) {
    console.error("Error login user:", error.message);
    throw error;
  }
}


export async function getCurrentUser() {
 
  const url = `${API_URL}/users/get_user_by_token`;
  try {
   /* const res = await fetch(url, {
      method: "GET",
      credentials: "include",
    });*/
    const res = await apiFetch(url, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      //throw new Error('Failed getting user');
      return null;
    }

    // Parsirajte JSON odgovor
    const jsonResponse = await res.json();
    // console.log('JSON Response from getCurrentUser:', jsonResponse);

    const user = jsonResponse;
    // console.log("User fetched by token:", user);
    // Vrati user data
    return user;
  } catch (error) {
    console.error("Error get user by token:", error.message);
    throw error;
  }
}

// export async function logout() {
//   localStorage.removeItem("token");
//   localStorage.removeItem("expiration");

 
// }

export async function logout() {
  /*const res = await fetch(`${API_URL}/users/logout`, {
    method: "POST",
    credentials: "include", // <<< VAŽNO — da šalje cookies!
    headers: {
      "Content-Type": "application/json",
    },
  });*/

  const url = `${API_URL}/users/logout`;
  const res = await apiFetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
    });

  if (!res.ok) throw new Error("Logout failed");

  return res.json();
}


