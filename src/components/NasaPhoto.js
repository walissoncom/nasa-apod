import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Moment from 'react-moment';

const apiKey = process.env.REACT_APP_NASA_KEY;

function NasaPhoto() {

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {

        fetchPhoto();

        console.log(apiKey);

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );

            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }

    }, [])

    if (!photoData) return <div />;

    return (
        <>
            <NavBar />
            <div className="nasa-content">
                <div className="visual">
                    {photoData.media_type === 'image' ? (
                        <img
                            src={photoData.url}
                            alt={photoData.title}
                        />
                    ) : (
                        <iframe
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo"
                        />
                    )}
                </div>
                <div className="details">
                    <h1>{photoData.title}</h1>
                    <p className="date"><Moment format="DD/MM/YYYY">{photoData.date}</Moment></p>
                    <p className="explanation">{photoData.explanation}</p>
                </div>
            </div>
        </>
    )
}

export default NasaPhoto;