import Titulo from '../../components/Titulo';

export default function componentTitulo(){
	return(
		<div>
			<h1>Componente Título</h1>
			<Titulo 
				principal = "Página de Cadastro"
				secundario = "Incluir, alterar e excluir coisas!"
			/>
			<Titulo 
				principal = "Página de Login"
				secundario = "Informe seu e-mail e senha!"
				pequeno = {true}
			/>
			<Titulo 
				principal = "Página de Login"
				secundario = "Informe seu e-mail e senha!"
				pequeno
			/>
		</div>
	)
}