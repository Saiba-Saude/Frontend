import { Topleft } from "../../Components/Topleft/Topleft";
import "./Register.css";

export function Register (){

    return (

        <div className="all-register">

            <h1 className="h1-register" >Cadastro</h1>

            {/* inputs */}

            <div className="inputs-register">
                
                <input type="text" className="name" placeholder="Insira seu Nome"></input>
                <input type="text" className="card-register" placeholder="Cartão do SUS"></input>
                <input type="password" className="pass-register" placeholder="Sua senha"></input>
                <input type="text" className="date" placeholder="Nascimento"></input>
                <input type="text" className="loc" placeholder="Municipio/Bairro"></input>
                <input type="tel" className="tel" placeholder="Nº Tel/Celular"></input>
            </div>

            {/* buttons */}

           <button className="b-register" type="submit">Cadastrar-se</button>

            {/* boxs */}

            <div className="box1-register"></div>
            <div className="box2-register"></div>

            {/* imgs */}

            
            <img src="../images/OnlineDoctor.png" className="OnDoctor-register"/>
            
            
            {/* terms */}

            <footer class="footer-register">
                <input type="checkbox" className ="checkbox-register"/>
                <span>Eu aceito os <a href="#" className="link-register">Termos e Condições</a></span>

                    <br/>

                <input type="checkbox" className ="checkbox-register"/>
                <span>Eu aceito a <a href="#" className="link-register">Política de privacidade</a></span>
            </footer>

        </div>

    )
}