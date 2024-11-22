import React from "react";
import CreateForm from "../Forms/CreateForm";

const apiUrl = 'https://672c4dde1600dda5a9f7e1db.mockapi.io/items';

function CreatePage() {
    return (
        <div>
            <h1>Create New Item</h1>
            <CreateForm apiUrl={apiUrl} />
        </div>
    );
}

export default CreatePage;
