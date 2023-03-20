import { useContext } from 'react';
import { useMutation } from 'react-query';
import { ApiContext } from '../components/ApiProvider';


export default function useUniversity(){
  const { fetchAPI } = useContext(ApiContext);

  function loadUniversity(request){
    return fetchAPI('GET','/getUniversity');
  }

  return useMutation(loadUniversity,{
    throwOnError: true, 
    refetchQueries: ['loggedInUser'], 
    waitForRefetchQueries:true,
    refetchQueriesOnFailure: false 
  });
}

