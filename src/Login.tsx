const Login = () => {
  return (
    <>
    <div className="flex justify-center my-10" > 
        
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Login!</h2>
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Login</button>
            </div>
        </div>
      </div>
    </div>
    </>
    
    
  )
}

export default Login