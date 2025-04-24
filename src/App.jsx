import { useState } from "react"
import imgAnimada from "../public/networking.svg"
import { ToastContainer, toast } from 'react-toastify';


export default function App(){
  //modelo const [x, setX] = useState("valor inicial"), onde useState("") é uma função nativa de hook
  const [user, setUser] = useState("") 
  const [pass, setPass] = useState("") 
  //função para usar no clique do botão
  function clickLogin(){
    //! antes da variavel verifica se a mesma é nula, falsa
    if (!user || !pass){
      return toast.error("Preencha todos os campos")
    }
    if (user.length < 8 || pass.length < 8){
      return toast.error("Usuário ou senha inválidos")
    }
    console.log(user)
    console.log(pass)
    toast.success("🦄 Deu bom!");
  }

  return (
    <div className="w-full h-screen flex bg-[#201B2C]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
      />
      <div className="esquerda w-[50%] h-full flex items-center justify-center flex-col bg-[#201B2C]" >
        <h1 className="text-[30px] font-bold text-[#00fa85] bg-[#402697] rounded-lg p-2">Entre para o nosso time</h1>
        <img src={imgAnimada} alt="imagem-animada" width={550}/>
      </div>
      <div className="direita w-[50%] h-full flex items-center justify-center ">
        <div className="w-[50%] h-[350px] bg-[#402697] rounded-xl">
          <div className="w-full h-[15%] flex items-center justify-center ">
            <h1 className="text-[30px] text-[#00fa85] font-bold">LOGIN</h1>
          </div>
          <div className="w-full h-[60%] p-[20px]">
            <label htmlFor="user" className="text-white ">Usuário</label>
            <input 
              type="text" 
              id="user" 
              className="w-full rounded-md p-[10px] bg-green-400 text-white mb-4"
              //onChange atualiza o hook de acordo com as atualizações do campo input
              onChange={
                (event) => {setUser(event.target.value)}
              }
            />

            <label htmlFor="pass" className="text-white ">Senha</label>
            <input 
              type="password" 
              id="pass" 
              className="w-full rounded-md p-[10px] bg-green-400 text-white" 
              onChange={
                (event) => {setPass(event.target.value)}
              }
            />

            <div className="w-full flex items-center justify-center text-white pt-1">
              <a href="">Esqueceu sua senha?</a>
            </div>
          </div>
          <div className="w-full h-[25%] p-[20px] flex items-center">
            <button 
              className="w-full h-[50px] text-[18px] bg-green-400 rounded-lg cursor-pointer text-[#402697] font-bold"
              onClick={clickLogin}
              >ENTRAR</button>
          </div>
        </div>
     </div>
    </div>

    
  )
}