import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdateForm from "../Forms/UpdateForm";

const apiUrl = 'https://672c4dde1600dda5a9f7e1db.mockapi.io/items';

function UpdatePage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`${apiUrl}/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error("Error fetching item:", error));
    }, [id]);

    return (
        <div>
            <h1>Update Item</h1>
            {item ? <UpdateForm item={item} apiUrl={apiUrl} /> : <p>Loading...</p>}
        </div>
    );
}

export default UpdatePage;
