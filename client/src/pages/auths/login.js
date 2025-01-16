import PageLayout from "../../layouts/PageLayout";
import Navbar from "../../components/Navbar";
const Login = () => {
  return (
    <PageLayout title="page de connexion">
      <div className="page-container">
        <Navbar />
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card px-2 py-5 mx-auto w-25 bg-light">
            <div className="card-body">
              <h5 className="card-title">Connexion</h5>
              <form className="form-signin">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Sign in
                </button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
