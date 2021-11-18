import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoods } from '../store/foodSlice';

const Foods = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFoods())
    }, [dispatch])
    return (
        <>
            fooood
            {
                state.status === 'fulfilled' ? (
                    state.foods.map(food => {
                        return (
                            <h1>k</h1>
                        )
                    })
                ) : null
            }
        </>
    )
}

export default Foods;