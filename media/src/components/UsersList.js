import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchUsers} from '../store';

function UsersList(){
    const dispatch = useDispatch();

    // const {data, isLoading, error} = useSelector((state) => {
    //     return state.users;
    // })

    useEffect(() => {
        dispatch(fetchUsers)
    }, [dispatch])

    return (
    <div>
        UserList
    </div>)
}

export default UsersList;