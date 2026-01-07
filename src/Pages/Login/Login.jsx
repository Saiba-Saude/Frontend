import "./Login.css";
import { useNavigate } from "react-router-dom";

export function Login() {

     const navigation = useNavigate();

    return (

        <div className="all-login">

      
              <img src="../images/logo.png" className="logo-login"/>
          
              <img src="../images/medicos.png" className="doctors-login"/>
           

        <main className="login-container">
            


        <div className="login-card">
        <h2>LOGIN</h2>

          <input type="text" placeholder="N° Cartão do SUS"/>
        <input type="password" placeholder="Sua senha"/>
        

        <button type="submit" onClick={() => navigation("/home")}>Entar</button>

        <div className="links-login">
        <p>
             Ainda não tem conta? <a className="login-link" href=" ">Cadastrar-se</a>
        </p>
                
        <p>
             Precisa de ajuda? <a className="login-link" href=" ">Equeci a senha</a>
        </p>

        </div>


        </div>


        </main>

        </div>
    )

  }

