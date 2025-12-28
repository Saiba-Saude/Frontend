import "./Register.css";

function Component3 (){

    return (

        <div id="all">

            <img src="/logo.png" id="logo" />
        
            <h1 id="t1" >Cadastro</h1>

            {/* inputs */}

            <div class="inputs">

                <input type="text" id="name" placeholder="Insira seu Nome"></input>
                <input type="text" id="card" placeholder="Cartão do SUS"></input>
                <input type="password" id="password" placeholder="Sua senha"></input>
                <input type="text" id="date" placeholder="Nascimento"></input>
                <input type="text" id="loc" placeholder="Municipio/Bairro"></input>
                <input type="tel" id="tel" placeholder="Nº Tel/Celular"></input>

            </div>

            {/* buttons */}

           <button class="b" type="submit">Cadastrar-se</button>

            {/* boxs */}
            <div class="box"></div>
            <div class="box1"></div>

        </div>

    )
}

export default Component3;