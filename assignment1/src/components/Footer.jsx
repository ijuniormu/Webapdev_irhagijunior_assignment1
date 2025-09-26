
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="container py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <div className="rounded-xl border p-4 space-y-1">
            <p><span className="font-medium">Email:</span> muderhwa06@gmail.com</p>
            <p><span className="font-medium">Phone:</span> +1 (613) 252- 3082
            
            </p>
            <p><span className="font-medium">Location:</span> Ottawa, ON</p>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-slate-600">© {year} Junior Muderhwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
