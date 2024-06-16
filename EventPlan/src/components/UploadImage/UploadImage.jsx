import React, { useState, useEffect } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../../firebase/config';
import { useParams } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const UploadImage = () => {
    const { id } = useParams(); 
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [uploadedImages, setUploadedImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const storageRef = ref(storage, `events/${id}/images`);
            const imageList = await listAll(storageRef);
            const urls = await Promise.all(imageList.items.map(item => getDownloadURL(item)));
            setUploadedImages(urls);
        };

        fetchImages();
    }, [id]);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!image) return;
        const storageRef = ref(storage, `events/${id}/images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (error) => {
                console.error('Upload error: ', error);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                    setUploadedImages(prev => [...prev, downloadURL]); 
                });
            }
        );
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
            <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="upload-tooltip">Upload Image</Tooltip>}
            >
                <button id="upload-button" onClick={handleUpload}>
                    Upload
                </button>
            </OverlayTrigger>
            <progress value={progress} max="100" />
            {url && <img src={url} alt="Event" />}
            <div>
                {uploadedImages.map((imgUrl, index) => (
                    <img key={index} src={imgUrl} alt={`Event ${id}`} style={{ width: '100px', margin: '10px' }} />
                ))}
            </div>
        </div>
    );
};

export default UploadImage;
