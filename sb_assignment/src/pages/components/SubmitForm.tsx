import { useState } from "react";

const SubmitForm = () => {
    const [headerImage, setHeaderImage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const finalFormEndpoint = e.target.action;
        const data = Array.from(e.target.elements)
            .filter((input: any) => input.id)
            .reduce((obj: any, input: any) => Object.assign(obj, { [input.id]: input.value }), {});

        fetch(finalFormEndpoint, {
            method: 'POST',
            headers: {
                token: "pj11daaQRz7zUIH56B9Z",
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => {
              if (response.status !== 200) {
                throw new Error(response.statusText);
              }

              return response.json();
            })
            .then(() => {
              console.log('success');
            })
            .catch((err: any) => {
              console.log(err);
            });

    }


        const requestOptions = {
            method: 'GET',
            headers: {
                token: "pj11daaQRz7zUIH56B9Z",
            },
            redirect: 'follow'
        };

        let response = fetch("https://frontend-case-api.sbdev.nl/api/categories", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    return (
        <form onSubmit={handleSubmit} action="https://frontend-case-api.sbdev.nl/api/posts" method="POST" className="bg-white col-span-5 p-6 [&>label]:block [&>label]:mt-6 [&>label]:mb-2 [&>label]:text-xs">
            <h2 className="font-bold text-2xl">Plaats een blog bericht</h2>

            <label htmlFor="title">Berichtnaam</label>
            <input
                className="bg-light-gray w-full px-3 py-3 text-xs placeholder:italic"
                type="text"
                id="title"
                placeholder="Geen titel"
                required
            />

            <label htmlFor="category_id">Categorie</label>
            <select
                className="bg-light-gray w-full px-3 py-3 text-xs placeholder:italic cursor-pointer"
                id="category_id"
                required
            >
                <option value="0" hidden disabled selected>Geen categorie</option>
                <option value="1">People</option>
                <option value="2">Technology</option>
                <option value="3">Ideas</option>
                <option value="4">Lifestyle</option>
            </select>

            <label htmlFor="name">Header afbeelding</label>
            <div className="flex items-center">
                <label htmlFor="image" className="flex bg-light-gray w-fit px-3 py-3 cursor-pointer">
                    <img src="/assets/camera.svg" alt="Camera Icon" width={13} height={12}/>

                    <label className="flex justify-center bg-gray-400 text-zinc-50 rounded-xl ml-4 py-1 px-3 text-xs cursor-pointer">Kies bestand</label>
                    <input
                        className="opacity-0 absolute"
                        type="file"
                        id="image"
                        accept="image/*"
                        required
                        onChange={(e) => setHeaderImage(e.target.value.split("\\")[2])}
                    />
                </label>
                <p className={`${headerImage ? "text-primary-orange" : "text-gray-400"}`}>
                    {headerImage ? headerImage : ""}
                </p>
            </div>


            <label htmlFor="content">Bericht</label>
            <textarea className="bg-light-gray w-full text-xs" name="content" id="content" rows={14} required></textarea>

            <button className="block m-auto bg-primary-orange mt-6 px-12 py-3 rounded-3xl font-semibold text-white text-xs">Bericht aanmaken</button>
        </form>
    );
}

export default SubmitForm;
