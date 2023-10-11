import {useEffect, useState} from "react";
import {CATEGORY_URL, POST_URL} from "@/pages/types";

const SubmitForm = () => {
  const [blogCategories, setBlogCategories] = useState([])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')

  const sendPost = (e) => {
    e.preventDefault()

    let data = new FormData();
    data.append("title", title);
    data.append("content", content);
    data.append("category_id", category);
    data.append("image", document.getElementById("image").files[0]);

    let requestOptions = {
      method: 'POST',
      headers: {
        token: "pj11daaQRz7zUIH56B9Z",
      },
      body: data,
      redirect: 'follow'
    };

    fetch(POST_URL, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const getCategories = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        token: "pj11daaQRz7zUIH56B9Z",
      },
      redirect: 'follow'
    };
    let categories = await fetch(CATEGORY_URL, requestOptions)
      .then(response => response.json())
    setBlogCategories(categories)
    return categories;
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <form onSubmit={sendPost} action={POST_URL} method="POST" className="bg-white col-span-5 p-6">
      <h2 className="font-bold text-2xl">Plaats een blog bericht</h2>
      <label className="mt-6 mb-2 font-medium block text-xs" htmlFor="title">Berichtnaam</label>
      <input className="bg-social-gray w-full px-3 py-3 text-xs placeholder:italic" type="text" id="title" placeholder="Geen titel" onChange={(e) => setTitle(e.target.value)} required/>

      <label className="mt-6 mb-2 font-medium block text-xs" htmlFor="category_id">Categorie</label>
      <select className="bg-social-gray w-full px-3 py-3 text-xs placeholder:italic cursor-pointer" id="category_id" required onChange={(e) => setCategory(e.target.value)} defaultValue={"0"}>
        <option value="0" className="text-post-gray" hidden disabled >Geen categorie</option>
        {blogCategories &&
          blogCategories.map((item, i) => {
            return <option value={item.id} key={i}>{item.name}</option>;
          })}
      </select>

      <label className="mt-6 mb-2 font-medium block text-xs">Header afbeelding</label>
      <div className="flex items-center">
        <div htmlFor="image" className="flex bg-social-gray w-fit px-3 py-3 cursor-pointer">
          <img src="/camera.svg" alt="Camera Icon" width={13} height={13}/>

          <label className="flex justify-center bg-gray-400 text-zinc-50 rounded-xl ml-4 py-1 px-3 text-xs cursor-pointer">Kies bestand          <input className="opacity-0 absolute" type="file" id="image" accept="image/*" required/></label>
        </div>
      </div>


      <label className="font-medium block mb-2 mt-6 text-xs" htmlFor="content">Bericht</label>
      <textarea className="bg-social-gray w-full text-xs" name="content" id="content" rows={14} required
                onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <button className="block m-auto bg-social-orange mt-6 px-12 py-3 rounded-3xl font-semibold text-white text-xs">Bericht aanmaken</button>
    </form>
  );
}

export default SubmitForm;
