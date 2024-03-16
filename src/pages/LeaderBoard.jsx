import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeaderBoard } from '../redux/User/action';

const LeaderBoard = () => {
    const dispatch = useDispatch();
    const { allUser } = useSelector((store) => store.userReducer);

    useEffect(() => {
        dispatch(getLeaderBoard());
    }, []);

    console.log("alluser", allUser);

    return (
        <div className="leaderboard-container">
            <h1 className='text-[40px] text-center'>Player Rankings</h1>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {allUser?.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LeaderBoard;
