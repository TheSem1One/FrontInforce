import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchShortUrl } from "../../redux/slices/shortUrl";
import styles from './index.module.scss';
import { Link } from "react-router-dom";


export const Main = () => {
  const dispatch = useDispatch();
  const { shortUrl } = useSelector(status => status.shortUrl)

  const isShortUrlLoading = shortUrl.status === 'loading'
  React.useEffect(() => {
    dispatch(fetchShortUrl());
  }, [])
  console.log(shortUrl)
  return (
    <div>

      <div>Short Url requers</div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>ShortUrl</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isShortUrlLoading
            ? [...Array(5)].map((_, index) => (
              <tr key={index}>
                <td colSpan="3">Loading...</td>
              </tr>
            ))
            : shortUrl.items.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.short}</td>
                <td>
                  <Link to={`/${obj.id}`}>View More</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>


  )
} 