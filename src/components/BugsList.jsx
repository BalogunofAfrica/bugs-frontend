import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBugs, getUnresolvedBugs, resolveBug } from '../store/bugs';

const BugsList = () => {

    const dispatch = useDispatch()
    const bugs = useSelector(getUnresolvedBugs)
    useEffect(() => {
        dispatch(loadBugs())
    }, [])

    const handleClick = id => dispatch(resolveBug(id))

    return (
        <ul>
            {bugs.map(bug => <li key={bug.id}>{bug.description} <button onClick={() => handleClick(bug.id)}>resolve</button></li>)}
        </ul>
    );
};

export default BugsList; 