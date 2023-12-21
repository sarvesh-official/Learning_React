
export default function Card({name="arun",city= "sattur",job = "sweeper",img= "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}) {
  return (
      <>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src={img} alt="" width="384" height="512" />
  <div className="pt-6 text- space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, eaque.
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {name}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {job + " " + city}
      </div>
                  </figcaption>
                  
  </div>
</figure>
      </>
  )
}
