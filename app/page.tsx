export default async function Test(){
  const res = await fetch("https://backend-test2-production.up.railway.app/")
  const data = await res.json()
  return <>
  
  <h1 className="text-center font-bold text-4xl p-3">Hello There</h1>
  <div className="box-border size-32 border-4 p-4  m-auto bg-red-50">
    <h3>Follow Me on Github</h3>
  <a href="https://github.com/khakachang"><button className="btn btn-primary">Follow</button></a>
  
  </div>
  <h1 className="text-4xl text-center p-4 ">This is the data Fetch From the back-end</h1>
  <h2>{data.msg}</h2>
  <div className="box-border size-32 m-auto text-center">
    <a href="/students"><button className="btn btn-secondary">Students Page</button></a>
  </div>
  </>
}