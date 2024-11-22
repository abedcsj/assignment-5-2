import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const apiUrl = 'https://672c4dde1600dda5a9f7e1db.mockapi.io/items';

function DetailPage() {
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
            {item ? (
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default DetailPage;
