import React,{ useState, createContext } from 'react';
const API_URL = "http://localhost:8000";
export const ApiContext = createContext({
  token:'',
  isLoggedIn:false,
  fetchAPI: () => {}
});

export default function ApiProvider(props){
  const { children } = props;
  const [ token, setToken ] = useState(localStorage.getItem('apiSessionToken'));

  function fetchAPI(method,path,body){
    const fetchConfig = { 
      method, 
      mode:'cors',
      headers : {
     //   'content-type': 'application/json'
      }
    };
    
    if(body){
      fetchConfig.body = JSON.stringify(body)
    }
    console.log('request=', `${API_URL}${path}`)
    return fetch(`${API_URL}${path}`,fetchConfig)
      .then((res) => {
        console.log('res=', JSON.stringify(res))
        return res;
      })
      .then((response) => {
        if(response.ok){
          return response.json();
        } else {
          return response.json().then((err) => {
            if (err.code == 'Unauthorized') {
              localStorage.clear();
              window.location.href = '/';
            }
            //throw err
          });
        }
      })
  }

  return (
    <ApiContext.Provider value={{ token, fetchAPI, isLoggedIn: !!token }}>
      {children}
 
    </ApiContext.Provider>
  )
}