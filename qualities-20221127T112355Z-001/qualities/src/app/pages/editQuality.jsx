import React, { useEffect, useState } from "react";
import EditForm from "../components/ui/editForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditQualityPage = () => {
    const id = useParams().id
    const qualityendPoint = `http://localhost:4000/api/v1/quality/${id}`
    const [quality, setQuality] = useState(null)
    const handleSubmit = (data) => {
        axios.put(qualityendPoint, data)
        .then((res) => console.log(res.data.content))
    }
    useEffect(async() => {
        const {data} = await axios.get(qualityendPoint)
        setQuality(data.content)
    },[])
    return (
        <>
            <h1>Edit Quality Page</h1>{""}
            {quality !== null ? (<EditForm data={quality} onSubmit={handleSubmit}/>) : ("Loading...")}
        </>
    );
};

export default EditQualityPage;
