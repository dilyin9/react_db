import React, { useEffect, useState } from "react";
import EditForm from "../components/ui/editForm";
import { useParams } from "react-router-dom";
import httpService from "../services/http.service";
const EditQualityPage = () => {
    const id = useParams().id
    const qualityendPoint = `http://localhost:4000/api/v1/quality/${id}`
    const [quality, setQuality] = useState(null)
    const handleSubmit = async (data) => {
        try {
           await httpService
           .put(qualityendPoint, data)
            .then((res) => console.log(res.data.content))
        }
        catch(error) {
            console.log('unexpected error');
        }
    }
    useEffect(async() => {
        const {data} = await httpService.get(qualityendPoint)
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
