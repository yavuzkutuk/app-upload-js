import { useRef, useState } from 'react';
import axios from 'axios';

export default function MyForm() {
  const inputRef = useRef();
  const [msg, setMsg] = useState('Aucun upload effectué');

  const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append('avatar', inputRef.current.files[0]);

    axios
      .post('http://localhost:3001/avatar', formData)
      .then(() => {
        setMsg('Upload réussi !');
      })
      .catch(() => {
        setMsg('Upload échoué !');
      });
  };

  return (
    <>
      <form onSubmit={hSubmit} enctype="multipart/form-data">
        <input type="file" ref={inputRef} />
        <button type="submit">Envoyer!</button>
      </form>
      <p>{msg}</p>
    </>
  );
}
