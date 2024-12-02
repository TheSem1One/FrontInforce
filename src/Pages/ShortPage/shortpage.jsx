import React from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "../../axios";

export const ShortUrlPage = () => {
    const [data, setData] = React.useState(true);

    const { id } = useParams();

    React.useEffect(() => {
        axios.get(`/api/shorturl/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch((err) => {
                console.warn(err);
                alert("Помилка отримання продукту")
            });
    })
    const onSubmit = async()=>{
        try{
           
            await axios.delete('/products',data.id)
            return <Navigate to=''/>
        }catch(err){
            console.warn(err)
        }
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Original Url</th>
                        <th>Short Url</th>
                        <th>Description</th>
                        <th>When Created</th>
                        <th>Created By</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.url}</td>
                        <td>{data.short}</td>
                        <td>{data.description}</td>
                        <td>{data.createdDate}</td>
                        <td>{data.createdBy}</td>
                        <td onClick={onSubmit()}>Delete</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}