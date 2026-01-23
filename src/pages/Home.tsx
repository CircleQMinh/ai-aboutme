import { useEffect } from 'react';
import { useGetDummyDataQuery } from '../lib/redux/api/dummyApi';
import { useAppDispatch, useAppSelector } from '../lib/redux/hooks/hooks';
import { selectDummyItems } from '../lib/redux/selectors/dummySelector';
import { setItems } from '../lib/redux/slices/dummySilce';

export default function Home() {
  const { data, isLoading, error } = useGetDummyDataQuery();
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectDummyItems)

  useEffect(() => {
    if(data?.products){
      dispatch(setItems(data.products))
    }
  }, [data, dispatch])


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;



  return (
    <ul>
      {items?.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
