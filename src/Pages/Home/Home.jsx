import "./Home.css";

function Componente2 (){

    return (
        <div id="all">

            <img src="/logo.png" id="logo" />

            <div class="title">

                <h1 id="t1">
                    Como podemos te 
                    <br/>
                   ajudar hoje?
                </h1>

            </div>


            <div id="buttons">
                
                <button id="b1" class="b">Meu Perfil</button>
                <button id="b2" class="b">Campanhas e Anúncios</button>
                <button id="b3" class="b">Histórico Médico</button>
                <button id="b4" class="b">Unidade de Saúde</button>
                <button id="b5" class="b">Angendar Consulta</button>
                <button id="b6" class="b">Configurações</button>
                <button id="b7" class="b">Sair</button>

            </div>

        <div id="box1"></div>
        <div id="box2"></div>

        </div>


    );
}

export default Componente2;