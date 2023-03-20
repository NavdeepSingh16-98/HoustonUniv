import { useContext } from 'react';
import { useMutation } from 'react-query';
import { ApiContext } from '../components/ApiProvider';


export default function useCategories(){
  const { fetchAPI } = useContext(ApiContext);

  function loadCategories(request){
    return fetchAPI('GET','/getCategories');
  }

  return useMutation(loadCategories,{
    throwOnError: true, 
    refetchQueries: ['loggedInUser'], 
    waitForRefetchQueries:true,
    refetchQueriesOnFailure: false 
  });
}

