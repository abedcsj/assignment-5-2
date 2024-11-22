import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../Common/ItemCard";

const apiUrl = 'https://672c4dde1600dda5a9f7e1db.mockapi.io/items';

function CrudPage() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error("Error fetching items:", error));
    }, []);

    const handleDelete = (id) => {
        fetch(`${apiUrl}/${id}`, { method: "DELETE" })
            .then(() => setItems(items.filter(item => item.id !== id)))
            .catch(error => console.error("Error deleting item:", error));
    };

    return (
        <div>
            <h1>Item List</h1>
            <button className="btn btn-primary" onClick={() => navigate("/create")}>
                Add New Item
            </button>
            <div>
                {items.map(item => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onEdit={(id) => navigate(`/update/${id}`)}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default CrudPage;
