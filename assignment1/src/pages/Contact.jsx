
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  // Section: Event Handlers
  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    // This is for normally send to a backend or service.

    console.log('Contact form submission:', form)
    alert('Thanks! Your message has been captured. Redirecting to Home...')
    navigate('/')
  }

  return (
    <section className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <div className="rounded-2xl border p-4 space-y-1">
          <p><span className="font-medium">Email:</span> muderhwa06@gmail.com</p>
          <p><span className="font-medium">Phone:</span> +1 (613) 252 3082</p>
          <p><span className="font-medium">Location:</span> Ottawa, ON</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border p-6 space-y-4 bg-white shadow-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
          <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
        </div>
        <Field label="Contact Number" name="phone" value={form.phone} onChange={handleChange} />
        <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
        <Field label="Message" name="message" as="textarea" value={form.message} onChange={handleChange} />
        <div className="flex gap-3">
          <button type="submit" className="rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">Send</button>
          <button type="reset" onClick={()=>setForm({firstName:'',lastName:'',phone:'',email:'',message:''})} className="rounded-xl border px-4 py-2 hover:bg-slate-50">Reset</button>
        </div>
      </form>
    </section>
  )
}

function Field({ label, name, value, onChange, type='text', as }) {
  const common = {
    name, value, onChange,
    className: "w-full rounded-xl border px-3 py-2"
  }
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      {as === 'textarea' ? (
        <textarea rows="4" {...common} required/>
      ) : (
        <input type={type} {...common} required/>
      )}
    </label>
  )
}
