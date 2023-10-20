import React from 'react'
import Review from '../review/Review'
import "./Reviews.scss";
import newRequest from '../../utils/newRequest.js';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';


export default function Reviews({ gigId }) {
    const queryClient = useQueryClient()

    const { isLoading, error, data } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () =>
            await axios.get(`https://vsfiverrapp1.onrender.com/api/reviews/${gigId}`).then((res) => {
                return res.data;
            }),
    });

    const mutation = useMutation({
        mutationFn: async (review)=>{
            return axios.post('https://vsfiverrapp1.onrender.com/api/reviews', review)
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries(['reviews'])
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const desc = e.target[0].value
        const star = e.target[1].value
        console.log(gigId, desc, star)
        mutation.mutate({gigId, desc, star})
    }

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            {isLoading ? "Loading..." : error ? "something went wrong" : data.map((review) => (
                <Review key={review._id} review={review} />
            ))}
            <div className="add">
                <h3>Add a new Review</h3>
                <form action="" className='addForm' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Write your opinion...'/>
                    <select name="" id="">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button>send</button>
                </form>
            </div>
        </div>
    )
}
