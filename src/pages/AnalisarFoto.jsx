import { useState } from 'react'
import { api } from '../services/api'

export default function AnalisarFoto() {
  const [url, setUrl] = useState('')
  const [resultado, setResultado] = useState(null)

  async function analisar() {
    const res = await api.post(
      `/fotos/analisar?url_foto=${encodeURIComponent(url)}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    setResultado(res.data)
  }

  return (
    <div>
      <h2>Analisar Foto</h2>
      <input placeholder="URL da foto" onChange={e => setUrl(e.target.value)} />
      <button onClick={analisar}>Analisar</button>
      <pre>{JSON.stringify(resultado, null, 2)}</pre>
    </div>
  )
}
