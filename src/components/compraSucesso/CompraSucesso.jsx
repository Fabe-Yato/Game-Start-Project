import "./compraSucesso.css"

const CompraSucesso = () => {
    return (

        <div className="sucesso">
             <div className="compra-realizada">
                 <h1>Compra realizada com sucesso!!</h1>
                 <h2>A confirmação do pedido será enviada ao seu email</h2>
                 <h2>O produto será entregue em até 5 dias úteis</h2>
             </div>
            
             <a href="/">
               <button>Voltar para o inicio</button> 
             </a>
             
        </div>
       
    )
}

export default CompraSucesso
